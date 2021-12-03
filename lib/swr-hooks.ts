import useSWR from 'swr';

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

export function useEntries() {
  const { data, error } = useSWR(`/api/get-entries`, fetcher)

  return {
    entries: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useCursos() {
  const { data, error } = useSWR(`/api/get-cursos`, fetcher)

  return {
    cursos: data,
    isLoadingCursos: !error && !data,
    isError: error,
  }
}

export function usePrograma() {
  const { data, error } = useSWR(`/api/get-programa`, fetcher)

  return {
    programa: data,
    isLoadingPrograma: !error && !data,
    isError: error,
  }
}

export function useMensajes() {
  const { data, error } = useSWR(`/api/get-mensajes`, fetcher, {
    // revalidate the data per second
    refreshInterval: 1000
  })

  return {
    mensajes: data,
    isLoadingMensajes: !error && !data,
    isError: error,
  }
}

export function useEntry(id: string) {
  return useSWR(`/api/get-entry?id=${id}`, fetcher)
}