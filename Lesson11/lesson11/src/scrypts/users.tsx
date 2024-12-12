export const users: (string | number)[] = [
  "JOJO",
  "JORNO",
  "JOULIN",
  "JOTARO",
  "JOVANNI",
];

export class PaintingService {
  paintings: IPainting[] = [
    {
      id: 1,
      name: "Zima Blue",
      year: "2023",
      author: "Zima Blue",
      size: "unknown",
      place: "Love, Death, Robots",
      link: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a2016984545239.5d5ffb2bd7ed5.jpg",
    },
    {
      id: 2,
      name: "Clouds in the mountains",
      year: "-",
      author: "Philipp Urlich",
      size: "3840 x 2160",
      place: "-",
      link: "https://cdna.artstation.com/p/assets/images/images/053/619/834/4k/philipp-a-urlich-cpncept459.jpg?1662632090",
    },
    {
      id: 3,
      name: "-",
      year: "-",
      author: "-",
      size: "-",
      place: "-",
      link: "https://sun9-52.userapi.com/impg/4w92D7HzCi68941BOfGR1vuGwyDAyF498swCNA/sXGPap1ZER4.jpg?size=850x1280&quality=96&sign=31f2456e956ab46d41baf3ae0ce11bed&type=album",
    },
    {
      id: 4,
      name: "-",
      year: "-",
      author: "Nate",
      size: "-",
      place: "-",
      link: "https://sun9-23.userapi.com/impg/CltN-njO9aEUplqrCTMuYgUzKcxGOjK6KdvfDA/VrNf33AotfI.jpg?size=1920x1440&quality=96&sign=20d2429f6780f7137821ce9c2fc4ab8d&type=album",
    },
    {
      id: 5,
      name: "-",
      year: "-",
      author: "-",
      size: "-",
      place: "-",
      link: "https://sun9-6.userapi.com/impf/c845120/v845120419/20839b/YQPHWps8voY.jpg?size=960x960&quality=96&sign=aec7642c8d04f394bb7f9e446375ed91&type=album",
    },
    {
      id: 6,
      name: "-",
      year: "-",
      author: "-",
      size: "-",
      place: "-",
      link: "https://sun9-45.userapi.com/impf/S_wPqVx-V4YVA_u0c4bAR2vMtwyiOcD5VY7Nkw/bqm7txHwgoQ.jpg?size=650x520&quality=96&sign=46896df7560253313e2c76ce52e42fd9&type=album",
    },
    {
      id: 7,
      name: "-",
      year: "-",
      author: "-",
      size: "-",
      place: "-",
      link: "https://sun9-19.userapi.com/impg/J2HB_ADhn0IbBmyAq4lbNj6PvFbSndLCghLutQ/SPttJVirIcg.jpg?size=1325x2048&quality=96&sign=a5baa6641b4db16f61a3f3d1bb13cf6c&type=album",
    },
    {
      id: 8,
      name: "-",
      year: "-",
      author: "Philipp Urlich",
      size: "-",
      place: "-",
      link: "https://cdnb.artstation.com/p/assets/images/images/074/901/205/4k/philipp-a-urlich-cpncept616c.jpg?1713259412",
    },
    {
      id: 9,
      name: "-",
      year: "-",
      author: "Philipp Urlich",
      size: "-",
      place: "-",
      link: "https://cdnb.artstation.com/p/assets/images/images/067/231/229/4k/philipp-a-urlich-cpncept574-opt.jpg?1694866707",
    },
  ];

  constructor() {}

  getPainting(id: number): IPainting {
    return this.paintings.find((item) => item.id === id) ?? this.default();
  }

  getPaintingsByAuthor(author: string, excludeID: number): IPainting[] {
    return this.paintings
      .filter((item) => item.author === author && item.id !== excludeID)
      .slice(0, 4);
  }

  default(): IPainting {
    return {
      id: -1,
      name: "",
      year: "",
      author: "",
      size: "",
      place: "",
      link: "",
    };
  }
}

export interface IPainting {
  id: number;
  name: string;
  year: string;
  author: string;
  size: string;
  place: string;
  link: string;
}


export const ps = new PaintingService();

//https://jsonplaceholder.typicode.com/users