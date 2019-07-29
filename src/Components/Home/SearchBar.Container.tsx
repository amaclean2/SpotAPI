import { connect } from 'react-redux'
import { searchSongs, searchArtists } from '../../Redux/Operations'
import SearchBar from './SearchBar.Component'

const mapStateToProps = (state:any) => ({
    
})

const mapDispatchToProps = (dispatch: Function) => ({
    searchSongs: (query?: string, pagStr?: string) => dispatch(searchSongs(query, pagStr)),
    searchArtists: (query?: string, pagStr?: string) => dispatch(searchArtists(query, pagStr))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)