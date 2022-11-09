import {collection, updateDoc} from 'firebase/firestore'
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Guitars} from "../components/Guitars";
import {FilterSlider} from "../components/FilterSlider";
import {useState} from "react";
import {Form, Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const guitarConverter = {
    toFirestore: function (dataInApp) {
        return {
            kind: dataInApp.kind,
            strings: dataInApp.strings,
            genre: dataInApp.genre,
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref}
    }
};

function GuitarFormEdit(props) {
    const {guitar, onClose, onSaveGuitar} = props;
    const [guitarToEdit, setGuitarToEdit] = useState({...guitar});
    return (
        <Modal show={!!guitar} onHide={onClose}>
            <Modal.Header closeButton>
                <h3 className="ms-2">Edit Guitar</h3>
            </Modal.Header>
            <div className="m-3 mt-0">
                <div className="d-flex justify-content-end fs-6 fw-light">
                    {guitar.id}
                </div>
                <Form>
                    <Form.Label className="mt-2 ms-1">kind of guitar:</Form.Label>
                    <Form.Control
                        value={guitarToEdit.kind}
                        onChange={e => setGuitarToEdit({...guitarToEdit, name: e.target.value})}/>
                    <Form.Label className="mt-2 ms-1">kind:</Form.Label>
                    <Form.Control
                        value={guitarToEdit.strings}
                        onChange={e => setGuitarToEdit({...guitarToEdit, strings:e.target.value})}/>
                    <Form.Label className="mt-2 ms-1">genre:</Form.Label>
                    <Form.Control
                        value={guitarToEdit.genre}
                        onChange={e => setGuitarToEdit({...guitarToEdit, genre: e.target.value})}/>
                </Form>
                <div className="d-flex justify-content-center p-2">
                    <Button className="m-1" size="lg" onClick={() => onClose()}>cancel</Button>
                    <Button className="m-1" size="lg" onClick={async () => {
                        if (await onSaveGuitar(guitarToEdit)) onClose();
                    }}>save</Button>
                </div>
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
        try {
            await updateDoc(guitar.ref, guitar);
            console.log(`save guitar ${guitar.kind} DONE`);
            return true;
        } catch (e){console.error(e)
            console.log(`ERROR save guitar ${guitar.kind} NOT done`);
        }
        return false;
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
                    onSaveGuitar={editGuitarSave}/>}
            <Guitars guitars={values?.filter(g => g.kind.includes(search))}  onEditGuitar={editGuitar} title={"Guitars"}/>

        </div>
    );
}
