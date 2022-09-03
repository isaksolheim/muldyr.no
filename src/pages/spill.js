import * as React from "react";
import "./index.css";

const Drikkelek = ({ data }) => (
  <main style={{ maxWidth: "600px", margin: "0 auto" }}>
    <strong>100 Spørmsål</strong>{" "}
    <p>
      100 Spørsmål en spørrelek hvor brukerne bestemmer spørsmålene! Lag dine
      egne sett med spørsmål eller spill de spillene resten av Norge spiller.
    </p>
    <p>
      Reglene er som følger: En spiller starter med noe som er enkelt å kaste,
      for eksempel en sjongleringsball. Et utsagn blir så lest fra en liste.
      Spilleren med sjongleringsballen kaster ballen videre til en valgfri
      person. Spilleren som får ballen må svare på spørsmålet.
    </p>
  </main>
);

export default Drikkelek;
