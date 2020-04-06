export interface BaseStats {
  Hp: number;
  HpRegen: number;
  Armor: number;
  MR: number;
  MovSpeed: number;
  Resource: number;
  ResourceRegen: number;
  AD: number;
  Range: number;
  AS: number;
};

export interface GrowthStats {
  Hp: number;
  HpRegen: number;
  Armor: number;
  Resource: number;
  ResourceRegen: number;
  MR: number;
  AD: number;
  AS: number;
};

export interface ChampionData {
  name: string;
  avatar: string;
  baseStats: BaseStats;
  growthStats: GrowthStats;
  spells: any;
};
