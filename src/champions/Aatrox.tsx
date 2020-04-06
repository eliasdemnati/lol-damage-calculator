import React from 'react';
import { Champion } from './Champion';
import { ChampionData, BaseStats } from './Types';

class Aatrox extends Champion {
  data: ChampionData;
  currentStats: BaseStats;
  defender: Champion;
  skillsChain: object[] = [];

  constructor(data: ChampionData, defender: Champion) {
    super(data);
    this.data = data;
    this.defender = defender;
    this.currentStats = Object.assign({}, data.baseStats);
  }

  displaySpells(callback: () => void) {
    return (
      <div>
        <img
          src={this.data.spells.Q}
          alt="q-spell"
          onClick={() => this.qSpell(callback)}
        />
        <img
          src={this.data.spells.W}
          alt="w-spell"
          onClick={() => this.wSpell(callback)}
        />
        <img
          src={this.data.spells.E}
          alt="e-spell"
          onClick={() => this.eSpell(callback)}
        />
        <img
          src={this.data.spells.R}
          alt="r-spell"
          onClick={() => this.rSpell(callback)}
        />
      </div>
    );
  }

  getSkillDisplay() {
    return this.skillsChain;
  }

  qSpell(callback: () => void) {
    return (
      <div>
        TODO
      </div>
    );
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

export default Aatrox;
