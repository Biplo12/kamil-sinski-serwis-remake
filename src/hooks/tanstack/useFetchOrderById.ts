import axios from 'axios';
import { useQuery } from 'react-query';

const useFetchOrderById = (orderId: string) => {
  const { data, isLoading, error, refetch, isError } = useQuery({
    queryKey: ['order', orderId],
    queryFn: async () => {
      const { data } = await axios.get(
        `/api/orders/vieworder?orderId=${orderId}`
      );
      return data;
    },
    enabled: false,
  });
  return { data, error, isLoading, refetch, isError };
};

export default useFetchOrderById;