import { useState } from "react";
import "./App.css";
//import Download from './componrnts/pdf';
import { } from "./audio/personnes.json";

function App() {
  // const [audio, setAudio] = useState([]);
  const [instractors, setInstractors] = useState(["personne_A", "personne_B", "personne_C"]);
  const [subjects, setSubjects] = useState(["subject_1", "subject_2", "subject_3", "subject_4", "subject_5"]);
  const [audios, setAudios] = useState([
    {
      instractor: "personne_A",
      subject: "subject_1",
      name: "subject_1_personne_A_1",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "personne_A",
      subject: "subject_1",
      name: "subject_1_personne_A_2",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "personne_A",
      subject: "subject_5",
      name: "subject_5_personne_A_2",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "personne_A",
      subject: "subject_3",
      name: "subject_3_personne_A_1",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "personne_B",
      subject: "subject_1",
      name: "subject_1_personne_B_1",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "personne_B",
      subject: "subject_2",
      name: "subject_2_personne_B_1",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "personne_B",
      subject: "subject_5",
      name: "subject_5_personne_B_2",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "personne_C",
      subject: "subject_1",
      name: "subject_1_personne_C_1",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "personne_C",
      subject: "subject_3",
      name: "subject_3_personne_C_1",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "personne_C",
      subject: "subject_1",
      name: "subject_1_personne_C_2",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "personne_B",
      subject: "subject_4",
      name: "subject_4_personne_B_1",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "personne_A",
      subject: "subject_4",
      name: "subject_4_personne_A_1",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "personne_C",
      subject: "subject_5",
      name: "subject_5_personne_C_1",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "personne_C",
      subject: "subject_5",
      name: "subject_5_personne_C_2",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get("./personnes.json")
  //     .then((res) => setAudio(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  // console.log("tessssssssssssssst", audio);
  return (
    <div className="app">
      <div class='ripple-background'>
  <div class='circle xxlarge shade1'></div>
  <div class='circle xlarge shade2'></div>
  <div class='circle large shade3'></div>
  <div class='circle mediun shade4'></div>
  <div class='circle small shade5'></div>
</div>
      <table className="table-all container">
        <thead>
          <tr className="header-row">
            <th className="header"></th>
            {instractors.map((instractor) => (
              <th className="header"> {instractor} </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {subjects.map((subject) => (
            <tr className="data-row">
              <th className="header"> {subject} </th>
              {instractors.map((instractor) => (
                <td className="data-cell">
                  {audios
                    .filter(
                      (audio) =>
                        audio.subject === subject &&
                        audio.instractor === instractor
                    )
                    .map((audio) => (
                      <div>
                        <audio  controls>
                          {audio.srcs.map((x) => (
                            <source src={x} />
                          ))}
                        </audio>
                        <br></br>
                      </div>
                    ))}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
