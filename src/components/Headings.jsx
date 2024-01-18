

const Headings = () => {
    return (
        <div className="my-8" style={{ overflowX: "auto" }}>
            <div className="text-blue-600 font-bold mt-4 ml-2" style={{ marginLeft: "8em", marginBottom: "2em", marginTop: "4em", fontSize: "1.2em"}}>
                Flashcard &gt; Mathematics &gt; 
                <span style={{ fontWeight: "bold", color: "#3182ce" }}> Relation and Function</span>
            </div>
            <div style={{ marginLeft: "3.2em", marginBottom: "1em", fontSize: "3em" }}>
                <span className="font-bold">Relations and Functions</span> (Mathematics)
            </div>
            <div className="flex justify-between" style={{ marginBottom: "2em", fontSize: "1.5em", textAlign: "center", alignItems: "center" }}>
                <span style={{ marginRight: "1em", textDecoration: "underline" }}>Study</span>
                <span style={{ marginRight: "1em" }}>Quiz</span>
                <span style={{ marginRight: "1em" }}>Game</span>
                <span style={{ marginRight: "1em" }}>Test</span>
                <span style={{ marginRight: "1em" }}>Others</span>
            </div>
        </div>
    );
};

export default Headings;
