import {collection} from 'firebase/firestore'
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Tabs} from "../components/Tabs";

const tabConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};

export default function TabPage() {
    const collectionRef  = collection(firestoreDB, 'guitarTabs').withConverter(tabConverter);
    const [values, loading, error]= useCollectionData(collectionRef );
    console.log({values,loading,error});


    return (
        <>
            <Tabs tabs={values} title={"Tabs"}/>

        </>
    );
}
