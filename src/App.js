import { useState } from "react";
import "./App.css";
//import Download from './componrnts/pdf';
import { } from "./audio/personnes.json";

function App() {
  // const [audio, setAudio] = useState([]);
  const [instractors, setInstractors] = useState(["i1", "i2", "i3", "i4"]);
  const [subjects, setSubjects] = useState(["s1", "s2", "s3"]);
  const [audios, setAudios] = useState([
    {
      instractor: "i1",
      subject: "s1",
      name: "s1_i1_a1",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "i1",
      subject: "s1",
      name: "s1_i1_a2",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "i2",
      subject: "s1",
      name: "s1_i2_a1",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "i2",
      subject: "s2",
      name: "s2_i2_a1",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "i3",
      subject: "s1",
      name: "s1_i3_a1",
      srcs: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    },
    {
      instractor: "i3",
      subject: "s3",
      name: "s3_i3_a1",
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
      <table className="table">
        <thead>
          <tr className="header-row">
            <th className="header">#</th>
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
                        <audio controls>
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
