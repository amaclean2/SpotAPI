import { connect } from 'react-redux'
import { searchSongs, searchArtists } from '../../Redux/Operations'
import Home from './Home.Component'

const mapStateToProps = (state:any) => ({

})

const mapDispatchToProps = (dispatch: Function) => ({
    searchSongs: (query?: string, pagStr?: string) => dispatch(searchSongs(query, pagStr)),
    searchArtists: (query?: string, pagStr?: string) => dispatch(searchArtists(query, pagStr))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)