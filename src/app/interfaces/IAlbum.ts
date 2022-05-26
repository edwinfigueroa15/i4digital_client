export interface Album {
    userId: number;
    id:     number;
    title:  string;
}

export interface AlbumCardProps {
    album: Album;
}