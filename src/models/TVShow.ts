type TVShow = {
    id: number
    name: string
    type: string
    language: string
    genres: string[]
    isRunning: boolean
    premieredDate?: Date
    channel: string
    imageUrl?: string
    summary?: HTMLParagraphElement
    rating?: number | string
    imdbID: string
    officialSite: string
  }
  
  export const getTvShow = (objJson: any): TVShow => {
    const {
      id,
      name,
      type,
      language,
      genres,
      status,
      premiered,
      network,
      webChannel,
      image,
      summary,
      rating,
      externals,
      officialSite
    } = objJson
  
    let year = 0
    let month = 0
    let day = 0
  
    if (premiered) {
      const slicedData = premiered.split('-')
      year = parseInt(slicedData[0])
      month = parseInt(slicedData[1]) - 1
      day = parseInt(slicedData[2])
    }
  
    const tvShow: TVShow = {
      id,
      name,
      type,
      language,
      genres,
      isRunning: status == 'Running' ? true : false,
      channel: network ? network.name : webChannel.name,
      summary,
      rating: rating.average !== null ? rating.average : 'S/N',
      imdbID: externals.imdb,
      officialSite: officialSite !== null ? `<a href="${officialSite}" target="_blank">Ir para site oficial</a>` : 'Indisponível'
    }

    if(premiered) {
        tvShow.premieredDate= new Date(year, month, day)
    }

    if(image) {
        tvShow.imageUrl = image.medium
    }
    return tvShow
  }
  
  export default TVShow
  