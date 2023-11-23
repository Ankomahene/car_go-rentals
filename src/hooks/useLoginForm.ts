import { useForm } from '@mantine/form';

export const useLoginForm = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (val: string) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val: string) =>
        val.length < 6 ? 'Password should include at least 6 characters' : null,
    },
  });

  return form;
};
