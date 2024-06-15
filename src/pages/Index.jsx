import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Checkbox, IconButton, Box } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Todo App</Text>
        <HStack width="100%">
          <Input
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="teal">Add Task</Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {tasks.map((task, index) => (
            <HStack key={index} width="100%" justifyContent="space-between">
              <Checkbox isChecked={task.completed} onChange={() => toggleTaskCompletion(index)}>
                <Text as={task.completed ? "s" : ""}>{task.text}</Text>
              </Checkbox>
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => deleteTask(index)}
                colorScheme="red"
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
      <Footer />
    </Container>
  );
};

const Footer = () => (
  <Box as="footer" width="100%" py={4} textAlign="center" borderTop="1px" borderColor="gray.200" mt={4}>
    <Text fontSize="sm" color="gray.600">© 2023 Todo App. All rights reserved.</Text>
  </Box>
);

export default Index;