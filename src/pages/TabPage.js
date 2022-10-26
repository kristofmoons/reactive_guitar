import {collection} from 'firebase/firestore'
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";

export default function TabPage() {
    const query = collection(firestoreDB, 'guitarTabs');
    const [values, loading, error]= useCollectionData(query);
    console.log({values,loading,error});


    return (
        <>
            <div>tabs from db</div>
            {/*<Tabs tabs={tabs} title={"Tabs"}/>*/}

        </>
    );
}
