import React, { FC } from 'react';
import { AlbumTypeAndSetAlbum } from '../Album.types';
import AlbumMain from '../../Utils/AlbumMain';
import AlbumButtons from './Albums.myAlbum.buttons';

const Album: FC<AlbumTypeAndSetAlbum> = props => (
	<AlbumMain {...props}>
		<AlbumButtons {...props}></AlbumButtons>
	</AlbumMain>
);

export default Album;
