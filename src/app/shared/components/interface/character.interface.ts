export interface Character {    
        id: number;
        name: string;
        image: string;
        gender: string;
        species: string;
        created: string;
        status: string;
        origin: {
          name: string;
          url: string;
        };
        location: {
          name: string;
          url: string;
        };
      }
      