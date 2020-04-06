import React, { Component } from 'react';
import { ChampionData } from './champions/Types';
import { Champion } from './champions/Champion';
import Aatrox from './champions/Aatrox';
import Ahri from './champions/Ahri';
import champions from './data/champions_test.json';
import DamageDisplay from './DamageDisplay';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  attack: Aatrox;
  defend: Ahri;

  constructor(props: any) {
    super(props);
    const aatrox: ChampionData = champions.find(champ => champ.name === 'Aatrox')!;
    const ahri: ChampionData = champions.find(champ => champ.name === 'Ahri')!;
    this.defend = new Ahri(ahri);
    this.attack = new Aatrox(aatrox, this.defend);
  }

  levelUp = (champion: Champion) => {
    champion.levelUp();
  }

  render() {
    return (
      <div>
        <DamageDisplay attack={this.attack} defend={this.defend} />
      </div>
    );
  }
}

export default App;
