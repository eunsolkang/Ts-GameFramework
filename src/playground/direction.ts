export type DirectionType = {
    name: string;
    dx: number;
    dy: number
}

export const Direction: DirectionType[] = [
    {
        name: 'Up',
        dx: 0,
        dy: -1,
    },
    {
        name: 'Down',
        dx: 0,
        dy: 1,
    },
    {
        name: 'Right',
        dx: 1,
        dy: 0,
    },
    {
        name: 'Left',
        dx: -1,
        dy: 0,
    }
];