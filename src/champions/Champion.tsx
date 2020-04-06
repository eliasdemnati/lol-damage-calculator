import React from 'react';
import { HpBar } from '../components';
import { ChampionData, BaseStats } from './Types';

export abstract class Champion {
  data: ChampionData;
  currentStats: BaseStats;
  currentLevel: number = 1;
  currentHp: number = 0;

  constructor(data: ChampionData) {
    this.data = data;
    this.currentStats = Object.assign({}, data.baseStats);
    this.currentHp = this.currentStats.Hp;
  }

  // Getters /////
  getName(): string {
    return this.data.name;
  }

  getAvatar(): string {
    return this.data.avatar;
  }

  // Stats /////
  calcStat(base: number, growth: number): number {
    return base + growth * (this.currentLevel - 1) * (0.7025 + 0.0175 * (this.currentLevel - 1));
  }

  calcAllStats() {
    this.currentStats.Hp = this.calcStat(this.data.baseStats.Hp, this.data.growthStats.Hp);
    this.currentStats.HpRegen = this.calcStat(this.data.baseStats.HpRegen, this.data.growthStats.HpRegen);
    this.currentStats.Armor = this.calcStat(this.data.baseStats.Armor, this.data.growthStats.Armor);
    this.currentStats.MR = this.calcStat(this.data.baseStats.MR, this.data.growthStats.MR);
    this.currentStats.Resource = this.calcStat(this.data.baseStats.Resource, this.data.growthStats.Resource);
    this.currentStats.ResourceRegen = this.calcStat(this.data.baseStats.ResourceRegen, this.data.growthStats.ResourceRegen);
    this.currentStats.AD = this.calcStat(this.data.baseStats.AD, this.data.growthStats.AD);
  }

  calcPhysicalMultiplier(): number {
    return 100 / (100 + this.currentStats.Armor);
  }

  calcMagicMultiplier(): number {
    return 100 / (100 + this.currentStats.MR);
  }

  levelUp() {
    if (this.currentLevel === 18) return; 
    this.currentLevel += 1;
    this.calcAllStats();
  }

  levelDown() {
    if (this.currentLevel === 1) return;
    this.currentLevel -= 1;
    this.calcAllStats();
  }

  // Display /////
  displayHp() {
    return <HpBar currentHp={this.currentHp} maxHp={this.currentStats.Hp} />
  }

  // Abstract /////
  abstract displaySpells(callback: () => void): any;
  abstract getSkillDisplay(): any;
  abstract qSpell(callback: () => void): any;
  abstract wSpell(callback: () => void): any;
  abstract eSpell(callback: () => void): any;
  abstract rSpell(callback: () => void): any;
}
