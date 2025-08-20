import { useState } from "react";
import Card from "./Card";

// Font Awesome
import Parser from "html-react-parser";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import {
  faEye,
  faUsers,
  faStopwatch,
  faMobileAlt,
  faHourglassEnd,
  faHandPointRight,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faEye,
  faHandPointRight,
  faHourglassEnd,
  faMobileAlt,
  faStopwatch,
  faUserSecret,
  faUsers,
);

const eyeIcon = icon({ prefix: "fas", iconName: faEye.iconName });
const handRightIcon = icon({ prefix: "fas", iconName: faHandPointRight.iconName });
const hourglassIcon = icon({ prefix: "fas", iconName: faHourglassEnd.iconName });
const mobileIcon = icon({ prefix: "fas", iconName: faMobileAlt.iconName });
const spyIcon = icon({ prefix: "fas", iconName: faUserSecret.iconName });
const stopwatchIcon = icon({ prefix: "fas", iconName: faStopwatch.iconName });
const usersIcon = icon({ prefix: "fas", iconName: faUsers.iconName });

export default function Rules() {
  const [showRules, setShowRules] = useState(false);

  return (
    <div style ={{ minWidth: "600px" }}>
    <Card header="📖 Mission Briefing">
      <button
        className="btn btn-outline-primary"
        onClick={() => setShowRules(!showRules)}
      >
        {Parser(eyeIcon.html.toString())} {showRules ? "Hide" : "Show"} Rules
      </button>
      <RulesDetails showRules={showRules} />
    </Card>
    </div>
  );
}

interface RulesDetailsProps {
  showRules: boolean;
}

function RulesDetails({ showRules }: RulesDetailsProps) {
  if (!showRules) return null;

  return (
    <>
      <ul className="mt-3">
        <li>{Parser(usersIcon.html.toString())} Up to 20 players (1–2 spies)</li>
        <li>{Parser(stopwatchIcon.html.toString())} Round time: 10 minutes</li>
        <li>{Parser(mobileIcon.html.toString())} Wheel of Names picks the first asker (screen-shared)</li>
        <li>{Parser(spyIcon.html.toString())} Spies don’t know the location</li>
      </ul>

      <hr />

      <h6>🌀 The Beginning</h6>
      <ul>
        <li>Spin the Wheel of Names. The chosen player asks the first question to anyone.</li>
        <li>After that, turns go in a simple circle: the person who answered now asks the next player.</li>
        <li>No skipping until everyone has had one turn.</li>
      </ul>

      <h6>❓ Talking Rules</h6>
      <ul>
        <li>Ask in ≤ 10 seconds. Answer in ≤ 7 seconds.</li>
        <li>Non-spies: give gentle hints without saying the location.</li>
        <li>Spies: blend in and listen carefully.</li>
      </ul>

      <h6>🚨 Accusations</h6>
      <ul>
        <li>Anyone can say “I accuse!” instead of asking/answering.</li>
        <li>You need 2 supporters to start a vote.</li>
        <li>Everyone except the accused votes. Majority = conviction.</li>
        <li>If the accused is a spy → non-spies win (unless the spy immediately guesses the location correctly).</li>
        <li>If the accused is innocent → spies win instantly.</li>
      </ul>

      <h6>{Parser(hourglassIcon.html.toString())} When the Timer Ends</h6>
      <ul>
        <li>Time up? Spies win—unless a final 1-minute accusation passes.</li>
      </ul>

      <h6>{Parser(handRightIcon.html.toString())} Spy’s Special Move</h6>
      <ul>
        <li>At any time, a spy may reveal and guess the location.</li>
        <li>Right guess → spies win. Wrong guess → non-spies win.</li>
      </ul>
    </>
  );
}
