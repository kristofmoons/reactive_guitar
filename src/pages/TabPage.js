import {collection} from 'firebase/firestore'
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Tabs} from "../components/Tabs";
import {FilterSlider} from "../components/FilterSlider";
import {useState} from "react";
import {Form} from "react-bootstrap";

const tabConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};

export default function TabPage() {
    const collectionRef = collection(firestoreDB, 'guitarTabs').withConverter(tabConverter);
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

            <Tabs tabs={values?.filter(t => t.name.includes(search))} title={"Tabs"}/>

        </>
    );
}
