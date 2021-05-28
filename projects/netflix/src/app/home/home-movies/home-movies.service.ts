import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, OriginalMovie } from './../types';


@Injectable({
  providedIn: 'root',
})
export class HomeMoviesService {
  private readonly BASE_URL = 'https://api.themoviedb.org/3';
  private readonly API_KEY = '214849890feefa84c31c1ba22d9ef072';
  public readonly IMAGES = 'https://image.tmdb.org/t/p/original/';
  private readonly ORIGINAL_MOVIES = `${this.BASE_URL}/discover/movie?api_key=${this.API_KEY}&with_networks=213`;
  private readonly LATEST_MOVIES = `${this.BASE_URL}/movie/latest?api_key=${this.API_KEY}&language=en-US`;
  private readonly TOP_RATED_MOVIES = `${this.BASE_URL}/movie/top_rated?api_key=${this.API_KEY}&language=en-US&page=1`;
  private readonly POPULAR_MOVIES = `${this.BASE_URL}/movie/popular?api_key=${this.API_KEY}&language=en-US&page=1`;
  TRENDING_URL = `${this.BASE_URL}/trending/movie/week?api_key=${this.API_KEY}`;
  // private readonly SIMILAR_MOVIES = `${this.BASE_URL}/movie/${movie_id}/similar?api_key=${this.API_KEY}&language=en-US&page=1`;
  constructor(private http: HttpClient) {}
  public getOriginalMovies(): any {}
  public getLatestMovies(): any {}
  public getTopRatedMovies(): any {}
  public getPopularMovies(): any {}
  public getSimilarMovies(): any {}
}
