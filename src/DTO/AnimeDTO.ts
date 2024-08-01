export interface AnimeCardDTO {
    id: number,
    image_url: string,
    small_image_url: string,
    large_image_url: string,
    genres: [
      {
        id: number,
        name: string,
        nameRus: string
      }
    ],
    studios: [
      {
        id: number,
        name: string
      }
    ],
    trailer: {
      youtube_id: string,
      url: string,
      embed_url: string,
      image_url: string,
      small_image_url: string,
      medium_image_url: string,
      large_image_url: string,
      max_image_url: string
    },
    title: string,
    title_english: string,
    title_japanese: string,
    type: string,
    source: string,
    episodes: number,
    status: string,
    airing: boolean,
    aired_from: string,
    aired_to: string,
    aired_str: string,
    duration: string,
    rating: string,
    score: number,
    synopsis: string,
    season: string,
    year: string
  }


  export interface AnimeListDTO {
    pagination: {
      last_page: number,
      has_next_page: boolean,
      current_page: number,
      items: {
        count: number,
        total: number,
        per_page: number
      }
    },
    data: [
      {
        id: number,
        image_url: string,
        small_image_url: string,
        large_image_url: string,
        genres: [
          {
            id: number,
            name: string,
            nameRus: string
          }
        ],
        studios: [
          {
            id: number,
            name: string
          }
        ],
        trailer: {
          youtube_id: string,
          url: string,
          embed_url: string,
          image_url: string,
          small_image_url: string,
          medium_image_url: string,
          large_image_url: string,
          max_image_url: string
        },
        title: string,
        title_english: string,
        title_japanese: string,
        type: string,
        source: string,
        episodes: number,
        status: string,
        airing: boolean,
        aired_from: string,
        aired_to: string,
        aired_str: string,
        duration: string,
        rating: string,
        score: number,
        synopsis: string,
        season: string,
        year: string
      }
    ]
  }
    