import { AxiosError } from 'axios';

export interface ErrorResponse {
  error: { code: number; message: string };
}

export function globalErrorHandler(error: AxiosError<ErrorResponse>) {
  switch (error.response?.data.error.code) {
    case 1002: {
      return 'Oops, something went wrong. Please double-check your API key and try again.';
    }
    case 1003: {
      return "We couldn't find what you're looking for. Please provide a valid search query.";
    }
    case 1005: {
      return "Uh-oh, it looks like the URL you're using is invalid. Please make sure it's correct.";
    }
    case 9000: {
      return 'There was an issue with the data you sent. Make sure your JSON data is well-formatted with UTF-8 encoding.';
    }
    case 9001: {
      return "You're requesting too many locations at once. Please limit bulk requests to 50 locations.";
    }
    case 2007: {
      return "You've used up your monthly API limit. Consider upgrading your subscription or wait for the limit to reset.";
    }
    case 2008: {
      return "We're sorry, but your API key has been disabled. Please contact our support team for assistance.";
    }
    case 2009: {
      return "Your API key doesn't have access to this resource. Check your subscription plan for details on allowed resources.";
    }
    default: {
      return 'Oops, something unexpected occurred. Please try again later or contact our support team for help.';
    }
  }
}
