type Body = any;

interface Headers {
  [key: string]: string;
}

class Api {
  private readonly host = 'https://g5cckh9ljb.execute-api.eu-west-2.amazonaws.com/dev';

  public async get(path: string, headers?: Headers) {
    return this.request(path, 'get', null, headers);
  }

  public async put(path: string, body?: Body, headers?: Headers) {
    return this.request(path, 'put', body, headers);
  }

  public async post(path: string, body?: Body, headers?: Headers) {
    return this.request(path, 'post', body, headers);
  }

  public async delete(path: string, headers?: Headers) {
    return this.request(path, 'delete', null, headers);
  }

  private async request(path: string, method: string, body?: Body, headers?: Headers) {
    const params = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      credentials: 'include',
      body: body ? JSON.stringify(body) : null
    };

    const response = await fetch(`${this.host}${path}`, params);

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    return response.status === 204
      ? null
      : await response.json();
  }
}

export const api = new Api();
