import React from 'react';
import { Champion } from './Champion';
import { ChampionData, BaseStats } from './Types';

class Ahri extends Champion {
  data: ChampionData;
  currentStats: BaseStats;
  skillsChain: object[] = [];

  constructor(data: ChampionData) {
    super(data);
    this.data = data;
    this.currentStats = Object.assign({}, data.baseStats);
  }

  displaySpells() {
    return (
      <div>
        <img
          src={this.data.spells.Q}
          alt="q-spell"
        />
        <img
          src={this.data.spells.W}
          alt="w-spell"
        />
        <img
          src={this.data.spells.E}
          alt="e-spell"
        />
        <img
          src={this.data.spells.R}
          alt="r-spell"
        />
      </div>
    );
  }

  getSkillDisplay() {}

  qSpell(callback: () => void) {
    const qSpell = <div>Q Spell {this.data.name}</div>;
    this.skillsChain.push(qSpell);
    callback();
  }

  wSpell(callback: () => void) {
    const wSpell = <div>W Spell {this.data.name}</div>;
    this.skillsChain.push(wSpell);
    callback();
  }

  eSpell(callback: () => void) {
    const eSpell = <div>E Spell {this.data.name}</div>;
    this.skillsChain.push(eSpell);
    callback();
  }

  rSpell(callback: () => void) {
    const rSpell = <div>R Spell {this.data.name}</div>;
    this.skillsChain.push(rSpell);
    callback();
  }
};

export default Ahri;
