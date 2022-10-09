import {Tabs} from "../components/Tabs";
import {TAB_DATA} from "../data/data";

export default function TabPage(props) {
    const {tabs} = props;

    return (
        <Tabs tabs={tabs} title={"Tabs"}/>
    );
}
