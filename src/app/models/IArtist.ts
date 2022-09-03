export interface IArtist {
    idArtist: number
    name: string
    style: string
    description: string
    photo: string

    sketchs: ISketch[]
}

export interface ISketch {
    id: number,
    idArtist: number,
    sketchName: string,
    photo: string
}
