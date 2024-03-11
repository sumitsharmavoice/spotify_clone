// graphql.js
import { gql } from '@apollo/client';

export const GET_SONGS = gql`
query GetSongs(  $songType: String!) {
  getSongs( songType: $songType) {
    id
    photoUrl
    audioUrl
    duration
    title
    artist
  }
}
`;

export const UPDATE_RECENTLY_PLAYED = gql`
  mutation UpdateRecentlyPlayed($songId: Int!) {
    updateRecentlyPlayed(songId: $songId) {
      ok
    }
  }
`;
