import { FC, useState } from 'react'
import { Box, TextField, Button, Grid } from '@mui/material'
import paymentForm from '../configs/paymentForm'
import CustomInput from '../components/CustomInput'

const PaymentForm: FC = () => {
  const defaultFormValues = {}
  paymentForm.forEach(item => defaultFormValues[item.name] = '')
  const [formValues, setFormValues] = useState(defaultFormValues)
  console.log(formValues)

  const handleInputChange = ({ name, value }) => {
    console.log({ name, value })
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        {paymentForm.map((item: any, key) => (
          <Grid key={key}>
            <CustomInput
              value={formValues[item.name]}
              onChange={handleInputChange}
              {...item}
            />
          </Grid>
        ))}
      </Grid>
      {/* <Button variant="contained" color="primary" type="submit">
        Submit
      </Button> */}
    </form >
  );
}

export default PaymentForm;