import { Cost } from './cost.model';

export interface Unit {
    id: number;
    name: string;
    description: string;
    expansion: string;
    age: string;
    cost?: Cost;
    build_time?: number;
    reload_time?: number;
    attack_delay?: number;
    movement_rate?: number;
    line_of_sight: number;
    hit_points: number;
    range?: any;
    attack?: number;
    armor: string;
    accuracy?: string;
}
