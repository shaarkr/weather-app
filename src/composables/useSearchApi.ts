import { useFetch } from '@/composables/useFetch';
import debounce from 'lodash.debounce';

export interface Location {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

export function useSearchApi() {
  const { fetch, data, loading, error } = useFetch<Location[]>();
  const debouncedFetch = debounce(fetch, 500);

  function handleSearch(query?: string) {
    error.value = null;

    if (!query) {
      error.value = 'Enter a location';
      return;
    }

    const url = `/search.json?q=${query}`;
    debouncedFetch(url);
  }

  return {
    data,
    loading,
    error,
    fetch: handleSearch,
  };
}
