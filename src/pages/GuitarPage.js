import {collection} from 'firebase/firestore'
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Guitars} from "../components/Guitars";
import {FilterSlider} from "../components/FilterSlider";
import {useState} from "react";
import {Form} from "react-bootstrap";

const guitarConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};

export default function GuitarPage() {
    const collectionRef = collection(firestoreDB, 'guitars').withConverter(guitarConverter);
    const [values, loading, error] = useCollectionData(collectionRef);
    const [search, setSearch] = useState("");
    console.log({values, loading, error});


    return (
        <>
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
            <Guitars guitars={values?.filter(g => g.kind.includes(search))} title={"Guitars"}/>

        </>
    );
}
