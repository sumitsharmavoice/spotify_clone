// graphql.js
import { gql } from "@apollo/client";

export const GET_SONGS = gql`
  query GetSongs($songType: SongType,$search:String) {
    getSongs(songType: $songType,search:$search) {
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

export const baseUrl = "https://song-tc.pixelotech.com";
