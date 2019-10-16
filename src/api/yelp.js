import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers:{
    Authorization: 'Bearer R4kU5M2b8WJqxCW2SDHOOFXhmnDaQdJcBqmdKRi-2v23iYb2BIsRiNW8qZ8ep8-a9ipuVTmMloLdhP6FsqYBo1-RpK5uag_jeh-on9FvlRyWEZVsZB2iK3KW492QXXYx'
  }
});

