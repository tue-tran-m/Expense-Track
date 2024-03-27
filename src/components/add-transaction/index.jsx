import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalContext } from "../../context";

function TransactionForm(props) {
  const { formData, setFormData, value, setValue, handleFormSubmit } = useContext(GlobalContext);

  function handleFormChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleFormSubmit(formData);
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter Transaction Description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter Transaction Amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
            </FormControl>

            <RadioGroup mt={"5"} value={value} onChange={setValue}>
              <Radio
                value="income"
                colorScheme="blue"
                name="type"
                checked={formData.type === "income"}
                onChange={handleFormChange}
              >
                Income
              </Radio>

              <Radio
                value="expense"
                colorScheme="red"
                name="type"
                onChange={handleFormChange}
                checked={formData.type === "expense"}
              >
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button mr={"4"} onClick={props.onClose}>
              Cancel
            </Button>
            <Button onClick={props.onClose} type="submit">
                Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}

export default TransactionForm;
