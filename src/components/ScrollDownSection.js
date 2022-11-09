
export function ScrollDownSection() {
    function scroll(){
        // eslint-disable-next-line no-restricted-globals
        scrollTo(0, document.body.scrollHeight);
    }
    return (
        <section id="ScrollDown" className="demo">
            <button onClick={scroll}><span/>Scroll</button>
            </section>
    );
}



