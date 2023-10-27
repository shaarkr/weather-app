import { ref } from 'vue';
import http from '@/utils/http';
import { AxiosError, AxiosResponse } from 'axios';
import { globalErrorHandler } from '@/utils/global-error-handler';

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
      if (err instanceof AxiosError) {
        error.value = globalErrorHandler(err);
      } else {
        error.value = err;
      }
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
