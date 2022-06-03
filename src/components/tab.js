import { observer } from "mobx-react";
import { useState } from "react";
import TabStore from "../mobx/tabStore";

const Tab = observer((props) => {
    const { count } = props
    const [tabStore] = useState(() => new TabStore(`tab-${count}`, "") );
    const inputChangeHandler = (e) => {
        tabStore.setContent(e.target.value);
    }
    const buttonClickHandler = () => {
        tabStore.increment();
    }
    return (
        <div className="box">
            <h1>Tab</h1>
            <p>{tabStore.id}</p>
            <span>{tabStore.counter}</span>
            <button onClick={buttonClickHandler}>+</button>
            <div>
                <input type={"text"} value={tabStore.content} onChange={inputChangeHandler}/>
            </div>
        </div>
    )
})

export default Tab;