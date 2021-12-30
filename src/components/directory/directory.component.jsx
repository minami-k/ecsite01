import React from 'react';
import { connect } from 'react-redux'
import { DirecotoryMenuContainer } from './directory.styled'
/* import './directory.styles.scss';
 */
/* import { directory } from 'assets/data/directory'
 */
import MenuItem from '../menu-item/menu-item.component';


class Directory extends React.Component {

  render() {
    const {directoryList} = this.props
    return (
      <DirecotoryMenuContainer>
        {directoryList.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} className={title}  />
        ))}
      </DirecotoryMenuContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  directoryList: state.directory.sections
})
export default connect(mapStateToProps)(Directory);
