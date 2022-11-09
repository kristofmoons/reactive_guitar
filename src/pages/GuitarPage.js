import {collection} from 'firebase/firestore'
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Guitars} from "../components/Guitars";
import {FilterSlider} from "../components/FilterSlider";
import {useState} from "react";
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const guitarConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};

function GuitarFormEdit(props) {
    const {guitar, onClose, onSaveGuitar} = props;
    console.log({guitar})
    return (
        <Modal show={!!guitar} onHide={onClose}>
            <Modal.Header closeButton>
                {guitar && <div>You are editing: {guitar.kind}</div>}
            </Modal.Header>
            <div className="d-flex justify-content-center p-2">
                <Button className="m-1" size="lg" onClick={() => onClose()}>cancel</Button>
                <Button className="m-1" size="lg" onClick={ async () => {
                    onSaveGuitar(guitar);
                }}>save</Button>
            </div>
        </Modal>
    );
}

export default function GuitarPage() {
    const collectionRef = collection(firestoreDB, 'guitars').withConverter(guitarConverter);
    const [values, loading, error] = useCollectionData(collectionRef);
    const [search, setSearch] = useState("");
    const [guitarSelected, setGuitarSelected] = useState();
    console.log({values, loading, error});

    function editGuitar(guitar) {
        console.log(`editing guitar ${guitar.kind}`);
        setGuitarSelected(guitar);
    }

    async function editGuitarSave(guitar) {
        console.log(`editing guitar ${guitar.kind}`)
            }

    console.log(values)
    return (

            <div style={{backgroundImage: "url('./images/landing1.png')", backgroundRepeat:"no-repeat",
                backgroundSize: "cover" }}>
            <FilterSlider>
                {
                    <Form>

                        <Form.Label>search</Form.Label>
                        <Form.Control
                            value={search}
                            onChange={e => setSearch(e.target.value)}/>
                    </Form>
                }
            </FilterSlider>
                {guitarSelected && <GuitarFormEdit
                    guitar={guitarSelected}
                    onClose={() => setGuitarSelected(undefined)}
                    onSavePerson={() => editGuitarSave(guitarSelected)}/>}
            <Guitars guitars={values?.filter(g => g.kind.includes(search))}  onEditGuitar={editGuitar} title={"Guitars"}/>

        </div>
    );
}
