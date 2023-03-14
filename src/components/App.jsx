import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
//how to fix this html code into a react proj
// create emoji entry component X
// create rops to replace hardcoded data X
// map through emojis in emojiwikijs file

//
function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      mame={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
