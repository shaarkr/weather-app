import { useFetch } from '@/composables/useFetch';

export interface Response {
  location: Location;
  current: Current;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export function useWeatherApi() {
  const { fetch, data, loading, error } = useFetch<Response>();

  function loadWeatherInfo(query?: string) {
    error.value = null;

    const url = `/current.json?q=${query}`;
    fetch(url);
  }

  return {
    data,
    weatherLoading: loading,
    weatherError: error,
    loadWeatherInfo,
  };
}
