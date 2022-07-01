import { FC, useState } from 'react'
import { Box, TextField, Button, Grid } from '@mui/material'
import paymentForm from '../configs/paymentForm'
import CustomInput from '../components/CustomInput'

const PaymentForm: FC = () => {
  const defaultFormValues = {}
  paymentForm.forEach(item => defaultFormValues[item.name] = '')
  const [formValues, setFormValues] = useState(defaultFormValues)

  const handleInputChange = (field) => {
    const { name, value } = field;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {paymentForm.map((item: any, key) => (
          <Grid item xs={2} sm={4} md={4} key={key}>
            <CustomInput
              value={formValues[item.name]}
              onChange={handleInputChange}
              {...item}
            />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form >
  );
}

export default PaymentForm;