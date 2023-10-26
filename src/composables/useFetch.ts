import { ref } from 'vue';
import http from '@/utils/http';
import { AxiosResponse } from 'axios';

export function useFetch<T>() {
  const data = ref<T | null>(null);
  const response = ref<AxiosResponse<any, any> | null>(null);
  const error = ref<unknown>(null);
  const loading = ref(false);

  const fetch = async (url: string, config = {}) => {
    loading.value = true;
    try {
      const result = await http.request({
        url,
        ...config,
      });
      response.value = result;
      data.value = result.data;
    } catch (err) {
      error.value = err;
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    response,
    data,
    loading,
    error,
    fetch,
  };
}
