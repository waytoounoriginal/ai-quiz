// Complete Question Bank for AI Learning Platform
const questions = [
  {
    "question": "In order to overcome the perceptron's limits, we can:",
    "answers": [
      "use neurons with a continuous threshold",
      "use kernel transformations on the domain",
      "these limits can't be overcome",
      "increase the number of neurons"
    ],
    "correct": "ad"
  },
  {
    "question": "What problems can be solved with machine learning?",
    "answers": [
      "regressions",
      "???",
      "plannings and classifications",
      "none of the above"
    ],
    "correct": "ac"
  },
  {
    "question": "The objective of a machine learning algorithm can be represented as:",
    "answers": [
      "numeric functions",
      "probabilistic functions",
      "a set of symbolic rules",
      "a table"
    ],
    "correct": "abcd"
  },
  {
    "question": "The induction phase for the process of building a decision tree is:",
    "answers": [
      "it labels the new data with the build rules",
      "it eliminates the branches that reflect noise & exceptions",
      "based on the training data",
      "works bottom-up or top-down"
    ],
    "correct": "cd"
  },
  {
    "question": "What is a tensor?",
    "answers": [
      "an image with multiple",
      "a mathematical object",
      "generalizations of scalars, vectors, and matrices in an arbitrary number of indices",
      "none of the above"
    ],
    "correct": "bc"
  },
  {
    "question": "Select the correct combination(s):",
    "answers": [
      "Output type: Continuous Output distribution: Gaussian Output layer: Linear Cost function: MSE",
      "Output type: Discrete Output distribution: Multinoulli Output layer: Softmax Cost function: Cross Entropy",
      "Output type: Binary Output distribution: Bernoulli Output layer: Sigmoid Cost function: BCE",
      "none of the above"
    ],
    "correct": "abc"
  },
  {
    "question": "What are the differences and similarities between the perceptron's rule and the delta rule?",
    "answers": [
      "In the delta rule, the model's quality is established based on all the data.",
      "The perceptron's rule is based on gradient descent.",
      "They both start with some random weights.",
      "Perceptron's rule recomputes the weights based on while the delta rule.",
      "The perceptron rule and delta rule always converge to the global optimum and are not affected by local minima.",
      "The perceptron rule and delta rule do not require any iterative optimization process and can achieve optimal weights in a single pass."
    ],
    "correct": "ac"
  },
  {
    "question": "What elements determine the velocity of a particle in a PSO algorithm (check all correct ones):",
    "answers": [
      "the old velocity",
      "inertia, social coefficient",
      "the current position of the particle",
      "none of the above"
    ],
    "correct": "abc"
  },
  {
    "question": "The limited model capacity of an ANN can be overcome by:",
    "answers": [
      "adding more layers in depth",
      "reducing the number of artificial neurons",
      "adding nonlinearity to the model",
      "none of the above"
    ],
    "correct": "c"
  },
  {
    "question": "What is the fitness function for the following problem: \"There is a set of M cards printed with integer numbers from -10 to 10. Select two subsets (that have no common elements and do not necessarily form a partition) using a GA, in such a way that they have the same sum of elements\"?",
    "answers": [
      "the absolute value of the sum of the selected elements from the first set / the number of elements from the second set.",
      "the difference in absolute value between the sum of the subset' elements and their divisors",
      "the difference in absolute value between the sums of elements from each subset",
      "the number of elements"
    ],
    "correct": "c"
  },
  {
    "question": "The Perceptron's algorithm:",
    "answers": [
      "is based on error minimization associated with an instance of train data",
      "the error is the difference between the real output y and the output o computed by the perceptron for an input",
      "it modifies the weights based on errors associated with an instance of train data",
      "none of the above"
    ],
    "correct": "abc"
  },
  {
    "question": "The \"dying ReLU\" problem refers to:",
    "answers": [
      "the values of the derivative",
      "the vanishing gradient",
      "the values of the function",
      "none of the above"
    ],
    "correct": "a"
  },
  {
    "question": "Choose the correct compatibility between the error function and the activation function from the output layer:",
    "answers": [
      "cross entropy error with softmax",
      "binary cross entropy with logistic error with the sigmoid activation function",
      "mean square error with the linear function",
      "none of the above"
    ],
    "correct": "abc"
  },
  {
    "question": "How does a ConvNet compute an image?",
    "answers": [
      "in such a network, the filters results are never combined",
      "there is automation in detecting the weights for the kernels",
      "there are usually three stages; several convolutions, a detector stage, and a pooling stage",
      "none of the above"
    ],
    "correct": "bc"
  },
  {
    "question": "Select the correct statements for Cross-Entropy loss:",
    "answers": [
      "is used in classifications",
      "is the difference between two probability distributions for a provided set of occurrences or random variables",
      "is never used after the softmax transformation after output",
      "none of the above"
    ],
    "correct": "ab"
  },
  {
    "question": "What are the properties of the training and testing data?",
    "answers": [
      "they have to respect the same distribution law",
      "the test data should be based on real experiences, and the training should be based on theoretical experiences",
      "if possible, the training and the data test should be disjunct sets",
      "none of the above"
    ],
    "correct": "ac"
  },
  {
    "question": "The harmonic mean between the precision and the recall is:",
    "answers": [
      "a metric for distance in a reinforcement learning algo",
      "the F1 score",
      "a statistical metric used to evaluate performance in a supervised learning process",
      "none of the above"
    ],
    "correct": "bc"
  },
  {
    "question": "When we compare two algorithms, we can use:",
    "answers": [
      "the divergence of the Accuracy",
      "confidence intervals",
      "performance measures",
      "none of the above"
    ],
    "correct": "bc"
  },
  {
    "question": "How are the neurons connected in a feed forward ANN?",
    "answers": [
      "through a backward signal",
      "through an output with a neuron from the same layer",
      "they are not connected",
      "through weighted links"
    ],
    "correct": "d"
  },
  {
    "question": "What sort of problems can a perceptron solve?",
    "answers": [
      "linear separation of elements from the domain",
      "XOR problem",
      "depends on the structure",
      "none of the above"
    ],
    "correct": "a"
  },
  {
    "question": "The vanishing gradients during backpropagation are:",
    "answers": [
      "not affecting us since the derivative is zero in this case on most of the domain",
      "are advantage in the training process that leads to faster convergence",
      "a typical problem when the network has too many hidden layers",
      "none of the above"
    ],
    "correct": "c"
  },
  {
    "question": "The activation logistic function:",
    "answers": [
      "is a linear function",
      "suffers from a vanishing gradient",
      "has limitations regarding the output domain",
      "has limitations regarding the input domain",
      "none of the above"
    ],
    "correct": "bc"
  },
  {
    "question": "An ANN with a structure of 226:15:10:2 with a sigmoid activation function. How many weights will the first neuron from the first hidden layer have?",
    "answers": [
      "2",
      "226",
      "10",
      "15"
    ],
    "correct": "b"
  },
  {
    "question": "In an artificial neuron, the transfer function:",
    "answers": [
      "is the equation of a hyperplane",
      "its nature limits the solving capacity of the neuron",
      "is the inner product of the input vector with the weight vector",
      "it can be the sigmoid function"
    ],
    "correct": "ac"
  },
  {
    "question": "The indirect experience when choosing the training database is:",
    "answers": [
      "in pairs (in/out)",
      "useful feedback for the objective function",
      "based on independent data with annotated content",
      "none of the above"
    ],
    "correct": "b"
  },
  {
    "question": "On a ConvNet, feature learning:",
    "answers": [
      "will minimize the loss function by extracting those who are most useful for classifying the images.",
      "allows a suite of tens or even hundreds of other small filters to be designed in order to detect more complex features in the image",
      "is performed before training the conv. layers",
      "none of the above"
    ],
    "correct": "ab"
  },
  {
    "question": "We can implement the infinite summation as a sum over a finite number of array elements:",
    "answers": [
      "in practice, we have two tensors: the input and the kernel",
      "such implementation is impossible in practice",
      "the input and the kernel are zero everywhere bet in the finite set of points",
      "by using a convolution operation"
    ],
    "correct": "d"
  },
  {
    "question": "Clustering is:",
    "answers": [
      "a process in two steps: training and testing",
      "using an unlabeled database",
      "another name for unsupervised learning",
      "none of the above"
    ],
    "correct": "abc"
  },
  {
    "question": "What are the correct statements about Decision Trees?",
    "answers": [
      "The decision nodes are located at the terminal levels of the tree while the result nodes are at the internal levels.",
      "Each leaf of the tree corresponds to a specific attribute or feature.",
      "They are used to divide a collection of articles into smaller sets by successively applying decision rules.",
      "Decision trees contain four types of nodes: decision nodes, hazard nodes, class nodes, and result nodes."
    ],
    "correct": "c"
  },
  {
    "question": "The activation logistic function:",
    "answers": [
      "suffers from vanishing gradient.",
      "is a linear function.",
      "has limitations regarding the input domain.",
      "none of the above."
    ],
    "correct": "a"
  },
  {
    "question": "Clustering is:",
    "answers": [
      "a one-step process: testing.",
      "Another name for unsupervised learning.",
      "using a labeled database.",
      "none of the above."
    ],
    "correct": "b"
  },
  {
    "question": "What is a feature of the database in training with indirect experience:",
    "answers": [
      "it is based on useful feedback for some objective function.",
      "it comes in pairs (in/out).",
      "it is based on independent data with annotated content.",
      "none of the above."
    ],
    "correct": "a"
  },
  {
    "question": "An ANN has a structure of 26:15:10:2 with a sigmoid activation function. How many weights will have the first neuron from the first hidden layer?",
    "answers": [
      "2",
      "15",
      "26",
      "10"
    ],
    "correct": "c"
  },
  {
    "question": "When constructing a decision tree, the attribute selection can be:",
    "answers": [
      "In preorder.",
      "Random.",
      "Based on the top parent.",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "The induction phase of the process of building a Decision Tree is:",
    "answers": [
      "It labels the new data with the built rules.",
      "It eliminates the branches that reflect noise or exception",
      "Based on the training data.",
      "Works bottom to bottom or top to top."
    ],
    "correct": "c"
  },
  {
    "question": "The back-propagation algorithm:",
    "answers": [
      "Is a training algorithm for ANNs.",
      "Guarantees finding the optimal set of weights and biases in a finite number of iterations.",
      "Can only be applied to shallow neural networks and is not suitable for deep learning architectures.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "Select the correct statements for Cross-Entropy loss:",
    "answers": [
      "Is never used when we apply the softmax transformation to the network's output.",
      "Is used in regressions.",
      "Is the difference between two probability distributions for a provided set of occurrences or random variables.",
      "None of the above."
    ],
    "correct": "c"
  },
  {
    "question": "What are the characteristics of the back-propagation algorithm?",
    "answers": [
      "It is crossing easy plateaus in the error function landscape.",
      "Does not require the derivatives of activation functions to be known at network design time.",
      "Is guaranteed to find the global minimum of the error function, not only the local minimum.",
      "None of the above."
    ],
    "correct": "d"
  },
  {
    "question": "What is the proper encoding for an individual in ANNs?",
    "answers": [
      "A computer program that learns to classify and performs regressions.",
      "A set of weights used to propagate a signal.",
      "There are no individuals in ANN.",
      "An array of bits that encode proper information related to the solution."
    ],
    "correct": "c"
  },
  {
    "question": "On a ConvNet, the feature learning:",
    "answers": [
      "Allows a suite of tens or even hundreds of other small filters to be erased in order to detect more complex features in the image.",
      "Is performed before training the conv-layers.",
      "Will minimize the loss function by extracting the features that are most useful for classifying the images.",
      "None of the above."
    ],
    "correct": "c"
  },
  {
    "question": "The \"dying ReLU\" problem refers to:",
    "answers": [
      "The values of the derivative.",
      "The values of the function.",
      "The vanishing gradient.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "The universal approximation theorem states that:",
    "answers": [
      "Any function can be approximated with a proper neural network.",
      "There should be enough neurons on the hidden layer in order to do the approximation.",
      "The conditions to approximate a function include the continuity of that function.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "What is a tensor?",
    "answers": [
      "A generalization of scalars, vectors, and matrices to an arbitrary number of indices.",
      "A mathematical object that contains a one-dimensional array of values.",
      "A black and white image with multi-channels.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "How does a ConvNet figure out what is in an image?",
    "answers": [
      "Automatically detecting the weights for the kernels during training.",
      "By decomposing the features.",
      "There are usually three stages: several convolutions, a decomposing stage, a flatten stage.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "The softmax function:",
    "answers": [
      "Transforms in probabilities the output scores for the classes.",
      "It incorporates the cross-entropy function.",
      "Is used in regressions.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "Select the correct combination:",
    "answers": [
      "Output type: Discrete, Output Distribution: Multinoulli, Output Layer: Linear, Cost Function: Cross Entropy.",
      "Output type: Binary, Output Distribution: Bernoulli, Output Layer: Sigmoid, Cost Function: Binary Cross Entropy.",
      "Output type: Continuous, Output Distribution: Gaussian, Output Layer: Softmax, Cost Function: MSE.",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "The L1 loss is:",
    "answers": [
      "It computes the average of the sum of absolute differences between actual values and predicted ones",
      "Used for classification problems",
      "Is also called the softmax loss",
      "Is never used when the distribution has outliers"
    ],
    "correct": "a"
  },
  {
    "question": "What is the difference between Particle Swarm Optimization (PSO) and Genetic Algorithms (GA)?",
    "answers": [
      "PSO runs free until it converges to the solution, while GA never reaches the solution",
      "The particles have a memory, while the individuals don't",
      "GA has particles, and PSO has individuals",
      "GA uses a fitness function, and PSO doesn't"
    ],
    "correct": "b"
  },
  {
    "question": "How does the artificial neuron process the information?",
    "answers": [
      "Based on backpropagation",
      "Based on the activation function",
      "Based on the error",
      "None of the above"
    ],
    "correct": "b"
  },
  {
    "question": "What are the main advantages of Deep Convolutional Neural Networks?",
    "answers": [
      "The architecture of a ConvNet is analogous to that of the connectivity pattern of neurons in an Artificial Cortex",
      "A ConvNet captures the feature gradient dependencies in a time series",
      "The preprocessing required in a ConvNet is much lower as compared to other classification algorithms",
      "None of the above"
    ],
    "correct": "c"
  },
  {
    "question": "What can be used when comparing two algorithms?",
    "answers": [
      "The divergence of accuracy",
      "Overconfidence intervals",
      "Performance measures",
      "None of the above"
    ],
    "correct": "c"
  },
  {
    "question": "What are the advantages of going in depth in an ANN?",
    "answers": [
      "To avoid overfitting",
      "To speed up the network's evaluation",
      "We avoid underfitting the model",
      "None of the above"
    ],
    "correct": "a"
  },
  {
    "question": "How is the objective of a machine learning algorithm typically represented?",
    "answers": [
      "A database table",
      "Numeric functions",
      "Distributions of probability",
      "A set of non-symbolic rules"
    ],
    "correct": "b"
  },
  {
    "question": "In order to overcome the perceptron's limits, we can:",
    "answers": [
      "Installing additional RAM directly enhances the neuron's processing power",
      "These limits can't be overcome",
      "Use neurons with a continuous threshold",
      "Applying the glitter property to the perceptron's activation function improves its ability to learn"
    ],
    "correct": "c"
  },
  {
    "question": "The vanishing gradients during backpropagation is:",
    "answers": [
      "An advantage in the training process that leads to faster convergence",
      "Since the derivative is zero in this case, on most of the domain, it does not affect us",
      "A problem typical when the network has too many hidden layers",
      "None of the above"
    ],
    "correct": "c"
  },
  {
    "question": "What problems can be solved with machine learning?",
    "answers": [
      "Ethical and moral considerations",
      "Planning and classifications",
      "Creative problems that require innovation",
      "None of the above"
    ],
    "correct": "b"
  },
  {
    "question": "The harmonic mean between precision and recall is:",
    "answers": [
      "A measure for distance in certain clustering algorithms.",
      "The F1 score, which combines precision and recall into a single value.",
      "A metric used to evaluate the trade-off between precision and recall in deterministic algorithms.",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "The information gain ratio:",
    "answers": [
      "It aims to reduce a bias towards multivalued attributes.",
      "Is the ratio between the information gain and the split information.",
      "It enhances an attribute by integrating a new term that depends on spreading degree.",
      "None of the above."
    ],
    "correct": "ab"
  },
  {
    "question": "We can implement the infinite summation as a sum over a finite number of array elements:",
    "answers": [
      "Such implementation is impossible in practice.",
      "In practice, we have two tensors: the input and the padding.",
      "By using a convolution operation.",
      "The input, the padding, and the kernel contain random numbers everywhere in the beginning."
    ],
    "correct": "c"
  },
  {
    "question": "What are the differences and similarities between the perceptron's rule and the delta rule?",
    "answers": [
      "The perceptron rule and delta rule always converge to the global optimum and are not affected by local minima.",
      "The perceptron rule and delta rule do not require any iterative optimization process and can achieve optimal weights in a single pass.",
      "They both start with some random weights.",
      "None of the above."
    ],
    "correct": "c"
  },
  {
    "question": "For Unsupervised Learning, choose the appropriate statement:",
    "answers": [
      "The training data comes in pairs: (attributes, outputs).",
      "It finds an unknown function that groups the training data into several classes.",
      "The goal is to find a model or structure inside the data that is useful.",
      "None of those things."
    ],
    "correct": "bc"
  },
  {
    "question": "The ReLU function:",
    "answers": [
      "Provides sparsity since y = 0 when x > 0",
      "Does not correct the problems that occur at sigmoid function",
      "It is a linear activation function",
      "Does not have a vanishing gradient when x > 0"
    ],
    "correct": "d"
  },
  {
    "question": "What elements determine the new velocity of a particle in a PSO algorithm? (check all correct ones)",
    "answers": [
      "The current position of the weakest particle",
      "Inertia, social coefficient",
      "The old velocity of the best particle",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "In computer vision, we apply a filter over an image:",
    "answers": [
      "By using a convolution operation with a kernel",
      "Moving the kernel and adding to the part of the image that the kernel is hovering over.",
      "In order to preprocess the input by subtracting some features from the initial image.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "Choose the correct answer.",
    "answers": [
      "Backpropagation is insensitive to the choice of activation functions and can perform equally well with any activation function.",
      "The gradient descent is based on the error associated with the entire set of train data.",
      "Adding more training data will always result in better generalization and performance for the ANN.",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "What is standardization?",
    "answers": [
      "A data transformation that introduces the scale effect.",
      "The process by which raw values are transformed into z-scores.",
      "The operation that transforms continuous values into discrete ones.",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "What crossover method(s) are correct for a binary representation in a GA?",
    "answers": [
      "Uniform",
      "There is no crossover for this representation",
      "Average crossover",
      "Insertion mutation"
    ],
    "correct": "a"
  },
  {
    "question": "Using a feed forward ANN we want to determine if a shape from a black-and-white image is a square or not. How is the error computed?",
    "answers": [
      "Based on the output of the hidden layer.",
      "Based on an induction formula.",
      "Based on the difference between the real output of the network and the desired output.",
      "None of the above."
    ],
    "correct": "c"
  },
  {
    "question": "Which factor is the primary consideration when selecting an appropriate learning algorithm?",
    "answers": [
      "Ability to predict cluster membership.",
      "Minimization of error through a cost function or loss function.",
      "Alignment with the desired data.",
      "Computational complexity of the target objective."
    ],
    "correct": "c"
  },
  {
    "question": "Choose the right compatibility between the output layer's activation function and error function:",
    "answers": [
      "Mean square error with the linear function.",
      "Binary cross entropy with logistic error with the sigmoid activation function.",
      "Cross entropy error with arctangent.",
      "None of the above."
    ],
    "correct": "ab"
  },
  {
    "question": "In an artificial neuron, the transfer function:",
    "answers": [
      "Represents the equation of a hyperplane.",
      "Utilizes entanglement to calculate the output.",
      "Requires the neuron to perform complex mathematical operations with imaginary numbers.",
      "Is the sigmoid function."
    ],
    "correct": "a"
  },
  {
    "question": "The Perceptron's algorithm:",
    "answers": [
      "It changes the weights based on the inverse error associated with a train data instance.",
      "Is based on maximizing the error for a given set of train data.",
      "The error is the difference between what the real output y is and what the perceptron's output o is for a given input.",
      "None of the above."
    ],
    "correct": "c"
  },
  {
    "question": "What is the relationship between the training and testing data?",
    "answers": [
      "The test data should reflect real-life experiences, while the training data can be based on theoretical experiences.",
      "They should follow the same distribution.",
      "The two sets must overlap.",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "What sort of problems can a perceptron solve?",
    "answers": [
      "Linear separations of elements from the domain.",
      "It depends on the structure.",
      "XOR problem.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "The limited model capacity of ANNs is overcome by:",
    "answers": [
      "Reducing the number of artificial neurons.",
      "Adding nonlinearity to the model.",
      "Adding more layers at the output level.",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "Select the correct statement for supervised learning:",
    "answers": [
      "The aim is to provide an arbitrary output for a new input.",
      "The training data comes in an unpaired format: only attributes or only output.",
      "We search for a known function that maps the input attributes to the outputs.",
      "None of the above."
    ],
    "correct": "d"
  },
  {
    "question": "How are the neurons connected into a feed forward ANN?",
    "answers": [
      "Through a backward signal.",
      "Through an output with a neuron from the same layer.",
      "They are not connected.",
      "Through weighted links."
    ],
    "correct": "d"
  },
  {
    "question": "Which of the following statements is true when we apply a max pooling transformation over a tensor:",
    "answers": [
      "We return the maximum value from the portion of the image covered by the kernel.",
      "We handle inputs of different types.",
      "We emphasize the features.",
      "We make the representation dependent on small translations of the input."
    ],
    "correct": "a"
  },


  //////////////////////////////////////////////////////
  // QUESTIONS FROM C01-C03 COURSE MATERIAL
  //////////////////////////////////////////////////////

  {
    "question": "Which statement correctly describes the relationship between Artificial Intelligence (AI) and Machine Learning (ML)?",
    "answers": [
      "AI and ML are the same field",
      "ML is a subset of AI; AI also includes rule-based systems, search, and other methods",
      "AI is a subset of ML",
      "ML is the only approach used in modern AI systems"
    ],
    "correct": "b"
  },
  {
    "question": "Which statements correctly describe Strong AI vs Weak AI?",
    "answers": [
      "Strong AI refers to systems that perform specific, narrow tasks without genuine understanding",
      "Weak AI systems are designed to perform specific tasks without genuine consciousness or reasoning across domains",
      "Strong AI possesses general intelligence comparable to a human mind, capable of reasoning across domains",
      "Current AI systems like image classifiers are examples of Strong AI"
    ],
    "correct": "bc"
  },
  {
    "question": "The Turing Test was proposed to evaluate:",
    "answers": [
      "Whether a machine can solve NP-hard problems in polynomial time",
      "Whether a machine's conversational behavior is indistinguishable from a human's",
      "Whether a machine can perform mathematical computations faster than a human",
      "None of the above"
    ],
    "correct": "b"
  },
  {
    "question": "Which of the following are characteristics of Classical AI (Symbolic/Rule-Based AI)?",
    "answers": [
      "Knowledge is represented explicitly using rules, logic, and symbols",
      "Intelligence is achieved through optimization and learning from data",
      "System behavior is interpretable and deterministic",
      "Performance depends primarily on the quality of training data"
    ],
    "correct": "ac"
  },
  {
    "question": "In machine learning, a model is best described as:",
    "answers": [
      "The dataset used for training",
      "The optimization algorithm used during training",
      "A parameterized function that maps input features to predictions",
      "The loss function that quantifies prediction errors"
    ],
    "correct": "c"
  },
  {
    "question": "Which of the following is NOT the model in a machine learning system?",
    "answers": [
      "A trained neural network with learned weights",
      "A decision tree learned from data",
      "The gradient descent optimization algorithm",
      "A linear regression function with learned parameters"
    ],
    "correct": "c"
  },
  {
    "question": "Empirical Risk Minimization (ERM) in machine learning refers to:",
    "answers": [
      "Minimizing the expected loss on the true (unknown) data distribution",
      "Minimizing the average loss computed over the training dataset",
      "Maximizing the accuracy on the held-out test set",
      "None of the above"
    ],
    "correct": "b"
  },
  {
    "question": "The real goal of a trained machine learning model is to:",
    "answers": [
      "Achieve the lowest possible training loss",
      "Memorize all training examples perfectly",
      "Generalize well and make accurate predictions on unseen data from the same distribution",
      "None of the above"
    ],
    "correct": "c"
  },
  {
    "question": "Overfitting in machine learning occurs when:",
    "answers": [
      "The model performs well on training data but poorly on unseen test data",
      "The model is too simple to capture the patterns in the training data",
      "The training loss is too high because the model is under-parameterized",
      "None of the above"
    ],
    "correct": "a"
  },
  {
    "question": "Underfitting in a machine learning model is best characterized by:",
    "answers": [
      "Low training loss but high test loss",
      "The model memorizes the training data without learning general patterns",
      "The model cannot capture the underlying patterns, resulting in high loss on both training and test data",
      "None of the above"
    ],
    "correct": "c"
  },
  {
    "question": "What is the purpose of a validation set in machine learning?",
    "answers": [
      "To train the model parameters using gradient descent",
      "To evaluate the model during training and tune hyperparameters without touching the test set",
      "To provide the final unbiased estimate of model performance after training is complete",
      "To increase the effective size of the training dataset"
    ],
    "correct": "b"
  },
  {
    "question": "Stochastic Gradient Descent (SGD) differs from batch gradient descent in that:",
    "answers": [
      "SGD computes the gradient using the entire training dataset at each update step",
      "SGD uses a single randomly selected data point (or small mini-batch) to estimate the gradient at each step",
      "SGD always converges to the global minimum of the loss function",
      "SGD does not require a learning rate parameter"
    ],
    "correct": "b"
  },
  {
    "question": "In the context of decision trees, entropy measures:",
    "answers": [
      "The depth or complexity of the decision tree",
      "The number of attributes available in the dataset",
      "The impurity or uncertainty present in a set of examples",
      "The accuracy of the decision tree on the training data"
    ],
    "correct": "c"
  },
  {
    "question": "Information gain in decision tree construction is used to:",
    "answers": [
      "Select the attribute that results in the greatest reduction in entropy (impurity) after the split",
      "Measure the total number of leaves in the resulting tree",
      "Evaluate the accuracy of a candidate decision rule on the test set",
      "None of the above"
    ],
    "correct": "a"
  },
  {
    "question": "The hyperbolic tangent (tanh) activation function:",
    "answers": [
      "Has an output range of (0, 1) like the sigmoid",
      "Has an output range of (-1, 1) and is zero-centered, unlike sigmoid",
      "Does not suffer from the vanishing gradient problem",
      "Is identical to the sigmoid function in behavior"
    ],
    "correct": "b"
  },
  {
    "question": "Leaky ReLU was introduced to address which problem of standard ReLU?",
    "answers": [
      "The vanishing gradient problem for large positive inputs",
      "The dying ReLU problem, by allowing a small non-zero gradient when inputs are negative",
      "The exploding gradient problem in deep networks",
      "None of the above"
    ],
    "correct": "b"
  },
  {
    "question": "In Convolutional Neural Networks, average pooling:",
    "answers": [
      "Returns the maximum value from each region covered by the pooling kernel",
      "Returns the average of all values in each region covered by the pooling kernel",
      "Adds zero padding to maintain spatial dimensions",
      "Applies a learned filter to detect local features"
    ],
    "correct": "b"
  },
  {
    "question": "Dropout regularization in neural networks works by:",
    "answers": [
      "Adding an L2 penalty term to the loss function based on the magnitude of weights",
      "Randomly deactivating (setting to zero) a fraction of neurons during each training step",
      "Reducing the learning rate whenever the validation loss plateaus",
      "None of the above"
    ],
    "correct": "b"
  },
  {
    "question": "Which statements about L1 and L2 regularization are correct? (choose all that apply)",
    "answers": [
      "L1 regularization tends to produce sparse weight vectors with many zero weights",
      "L2 regularization penalizes the sum of squared weight values",
      "Both L1 and L2 add a penalty term to the loss function to discourage large weights",
      "L2 regularization always guarantees convergence to the global minimum"
    ],
    "correct": "abc"
  },
  {
    "question": "Why is initializing all neural network weights to zero problematic?",
    "answers": [
      "It leads to slower convergence due to large initial gradients",
      "All neurons in a layer produce identical outputs and learn identical features (symmetry problem)",
      "It prevents the use of backpropagation entirely",
      "None of the above"
    ],
    "correct": "b"
  },
  {
    "question": "Which of the following are valid variants of gradient descent? (choose all that apply)",
    "answers": [
      "Batch gradient descent — uses the full training set per update",
      "Stochastic gradient descent — uses one sample per update",
      "Mini-batch gradient descent — uses a fixed-size subset per update",
      "Evolutionary gradient descent — uses crossover and mutation"
    ],
    "correct": "abc"
  },
  {
    "question": "In a Convolutional Neural Network, increasing the stride of a convolution:",
    "answers": [
      "Increases the spatial size of the output feature map",
      "Has no effect on the spatial dimensions of the output",
      "Reduces the spatial size of the output feature map",
      "Increases the number of learnable parameters in the layer"
    ],
    "correct": "c"
  },
  {
    "question": "In the context of neural networks, 'depth' refers to:",
    "answers": [
      "The total number of neurons across all layers",
      "The number of hidden layers in the network",
      "The number of input features fed to the network",
      "The number of output neurons"
    ],
    "correct": "b"
  },
  {
    "question": "Min-max normalization (feature scaling) transforms feature values so that:",
    "answers": [
      "All features have a mean of 0 and a standard deviation of 1",
      "All values fall within a specified range such as [0, 1]",
      "The data follows a Gaussian (normal) distribution",
      "None of the above"
    ],
    "correct": "b"
  },
  {
    "question": "One-hot encoding is typically used to:",
    "answers": [
      "Normalize continuous numerical features to a standard scale",
      "Represent categorical variables as binary vectors for use in ML models",
      "Reduce the dimensionality of high-dimensional input features",
      "None of the above"
    ],
    "correct": "b"
  },
  {
    "question": "Which of the following correctly describes Modern AI (Data-Driven / Statistical AI)?",
    "answers": [
      "Knowledge is represented explicitly via hand-crafted rules and symbols",
      "Intelligence is achieved through search, reasoning, and logical inference",
      "Performance depends on data availability, model capacity, and optimization",
      "System behavior is always fully interpretable and deterministic"
    ],
    "correct": "c"
  },
  {
    "question": "The learning rate in gradient-based optimization:",
    "answers": [
      "Determines the number of training epochs",
      "Controls how large a step is taken in the direction of the negative gradient at each update",
      "Sets the initial values of the network weights",
      "Is automatically chosen by the network and cannot be tuned"
    ],
    "correct": "b"
  },

  //////////////////////////////////////////////////////
  // NEW QUESTIONS ADDED
  //////////////////////////////////////////////////////

  // EXAM-MATERIALS SUBJECT   -- Nu stiu daca sunt bune

  {
    "question": "What is a proper encoding for an individual in Genetic Programming?",
    "answers": [
      "a string of bits",
      "depends on the problem",
      "a computer program that solves the given problem",
      "a binary expression"
    ],
    "correct": "c"
  },
  {
    "question": "Which one(s) of the following problems can’t be solved by a perceptron?",
    "answers": [
      "AND logic",
      "any problem that implies finding a function",
      "XOR",
      "OR logic"
    ],
    "correct": "c"
  },
  {
    "question": "What are the main specific features of a particle in PSO optimisation?",
    "answers": [
      "Velocity and trace",
      "Fitness function",
      "Current position and velocity",
      "There is no specific feature"
    ],
    "correct": "c"
  },
  {
    "question": "Which one of the following representations is NOT proper for the N-Queen problem?",
    "answers": [
      "Binary",
      "Vectors of N integers",
      "Vectors of N real numbers",
      "Permutation of N size"
    ],
    "correct": "a"
  },
  {
    "question": "What is the fitness function for the N-Queen problem?",
    "answers": [
      "The number of queens placed on the same line",
      "The number of queens placed on the same column",
      "The number of queens that attack each other",
      "The difference in absolute value between the number of queens that attack each other on line and the number of queens that attack each other on columns"
    ],
    "correct": "c"
  },
  {
    "question": "On what is based the ant colony system?",
    "answers": [
      "On an evolutionary schema",
      "The pheromone trace left by ants",
      "Inertia and speed",
      "Identical with PSO"
    ],
    "correct": "b"
  },
  {
    "question": "How is propagated the error into an artificial neural network that uses back-propagation?",
    "answers": [
      "In the same direction as the input signal",
      "You don’t compute the error for this algorithm",
      "In both directions",
      "It propagates backwards through the network"
    ],
    "correct": "d"
  },
  {
    "question": "Using an ANN to decide if a 15×10-pixel black-and-white image contains a circle (structure 150:15:20:2, sigmoid activation), what type of problem is this?",
    "answers": [
      "Regression",
      "Clustering",
      "Classification",
      "Dimensionality reduction"
    ],
    "correct": "c"
  },
  {
    "question": "In the same ANN (150:15:20:2), how many weights does each neuron in the last layer have (not counting its bias)?",
    "answers": [
      "15",
      "20",
      "2",
      "150"
    ],
    "correct": "b"
  },
  {
    "question": "On what does the adjustment value of the weights depend when training with back-propagation?",
    "answers": [
      "The learning rate and the gradient of the error",
      "The total number of training epochs",
      "The random seed used to initialize weights",
      "The number of hidden layers"
    ],
    "correct": "a"
  },
  {
    "question": "Specify the correct statement(s) in a ruled based system in certain environments inference engine with forward-chaining:",
    "answers": [
      "The inference engine can draw new conclusions",
      "Facts are represented in a working memory which is continually updated",
      "The actions usually involve adding or deleting items from working memory",
      "Rules are written as left-hand side (LHS) ⇒ right-hand side (RHS)"
    ],
    "correct": "abcd"
  },
  {
    "question": "For a Genetic Programming algorithm identify the correct statement(s):",
    "answers": [
      "Convergence (complete, optimal) through global optima is slow",
      "Easy to implement",
      "The solution’s quality depends on the precision of variables involved in the algorithm",
      "The main disadvantage is that it does depend on parameters"
    ],
    "correct": "cd"
  },
  {
    "question": "Which of the following selection methods are commonly used in evolutionary algorithms? (choose all that apply)",
    "answers": [
      "Roulette‐wheel selection",
      "Tournament selection",
      "Rank‐based selection",
      "Elitism (truncation) selection",
      "Random selection",
      "Gradient‐descent selection"
    ],
    "correct": "abcd"
  },
  {
    "question": "In applying a genetic algorithm to select a subset of integer‐engraved balls whose sum is as close as possible to S, which design choices are appropriate? (choose all that apply)",
    "answers": [
      "Binary string representation (1 = include, 0 = exclude)",
      "One‐point crossover and bit‐flip mutation operators",
      "Fitness = –|(sum of selected balls) – S| (maximize)",
      "Tournament selection",
      "Gradient‐descent operator"
    ],
    "correct": "abcd"
  },
  {
    "question": "Fuzzify the raw input data for a person of 45 years old (see diagram). What are the membership values (μ) for each fuzzy set?",
    "image": "imageQ1.png",
    "answers": [
      "μ_young = 0.0, μ_adult = 1.0, μ_middle‐age = 0.4, μ_old = 0.0",
      "μ_young = 0.0, μ_adult = 0.8, μ_middle‐age = 0.2, μ_old = 0.0",
      "μ_young = 0.0, μ_adult = 0.7, μ_middle‐age = 0.3, μ_old = 0.0",
      "μ_young = 0.0, μ_adult = 1.0, μ_middle‐age = 0.3, μ_old = 0.0"
    ],
    "correct": "a"
  },
  {
    "question": "Which element(s) determine the probability for a new possible element to be added to the solution in an ant colony system? (choose all that apply)",
    "answers": [
      "Pheromone matrix values (τ)",
      "Visibility of nodes (η)",
      "Coefficient of pheromone importance (α)",
      "Coefficient of visibility importance (β)",
      "Genetic crossover operator"
    ],
    "correct": "abcd"
  },

  // 2024 SUBJECT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 

  {
    "question": "Consider Figure 1, which represents the fuzzy classes for a person’s age. After fuzzifying the raw input data for a 35-year-old, we obtain the value:",
    "image": "imageQ2.png",
    "answers": [
      "μ_young(35) = 0.6; μ_adult(35) = 1; μ_middle_age(35) = 0.3; μ_old(35) = 0",
      "μ_young(35) = 0; μ_adult(35) = 1; μ_middle_age(35) = 0; μ_old(35) = 0",
      "μ_young(35) = 0.6; μ_adult(35) = 0.1; μ_middle_age(35) = 0.3; μ_old(35) = 0",
      "None of the above"
    ],
    "correct": "b"
  },

  // 2020 SUBJECT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  -- Astea sunt corecte !!
  {
    "question": "You have a problem that is NP-hard and you decide to attempt to solve it with Ant Colony Optimisation. In what sort of problem do you need to transform it?",
    "answers": [
      "Into a classification problem.",
      "You don't need to transform it, just let the algorithm do it for you.",
      "In a problem of identifying the optimal path in an oriented graph.",
      "Into the knapsack problem."
    ],
    "correct": "c"
  },
  {
    "question": "Consider two individuals (represented as permutations) of size 9 and apply an order crossover to them. What is the proper result if the cut points are after the 3rd and 6th position? (Select one or more. Parents are in the image)",
    "image": "imageQ3.png",
    "answers": [
      "[1, 9, 6, 8, 2, 3, 5, 4, 7] and [1, 2, 3, 5, 4, 6, 8, 7, 9]",
      "[1, 9, 8, 2, 3, 5, 6, 4, 7] and [1, 2, 6, 5, 4, 3, 8, 7, 9]",
      "[2, 1, 9, 2, 3, 8, 7, 8, 3] and [1, 4, 6, 6, 5, 4, 5, 7, 9]",
      "[1, 9, 6, 2, 3, 8, 5, 4, 7] and [1, 2, 3, 6, 5, 4, 8, 7, 9]"
    ],
    "correct": "d"
  },
  {
    "question": "Many AI methods are based on examples from nature. Particle Swarm Optimisation is based on:",
    "answers": [
      "In the theory of evolution.",
      "The behaviour of birds or murmuration of fish.",
      "This method is not inspired from nature as other AI methods.",
      "The random movements of particles."
    ],
    "correct": "b"
  },
  {
    "question": "You design an Evolutionary Algorithm for a given problem using a Generationist model. Select the correct properties of such a model that must be reflected within your application:",
    "answers": [
      "Each individual survives a generation only.",
      "A set of parents is totally replaced by the set of offsprings.",
      "At each generation it creates μ offsprings.",
      "A bad offspring is replaced by its parent."
    ],
    "correct": "abc"
  },
  {
    "question": "In what order during a BFS search will the nodes from the following tree be visited",
    "image": "imageQ4.png",
    "answers": [
      "50, 17, 72, 12, 23, 54, 76, 9, 14, 19, 67",
      "50, 72, 17, 76, 54, 23, 12, 64, 19, 14, 9",
      "50, 17, 72, 54, 76, 12, 23, 9, 14, 19, 67",
      "None of the above"
    ],
    "correct": "ab"
  },
  {
    "question": "Choose the correct characteristics for the binary representation, primarily used in Evolutionary Computation:",
    "answers": [
      "There is usually an encoder and a decoder that allow the user to understand the stored information.",
      "Other values can appear within a binary representation but through survival selection and adjustments they are removed.",
      "These representations are lists of zeros and ones.",
      "Once a bit reaches a certain value (0 or 1) a cut is performed to preserve the genotype of the individual represented binary."
    ],
    "correct": "ac"
  },
  {
    "question": "When computing a velocity for a particle using a PSO method, you have a parameter inertia. Specify the correct properties of this parameter:",
    "answers": [
      "Can be constant or descending.",
      "Forces the particle to move in the same direction until now.",
      "Forces the particle to move towards its best position.",
      "Balances the search between global exploration and local exploration."
    ],
    "correct": "abd"
  },
  {
    "question": "How do you initialise an Artificial Neural Network?",
    "answers": [
      "There is no initialization; the network will learn from the dataset the initial values.",
      "The inputs will be zero.",
      "Randomly assign values to the weights.",
      "Randomly assign values to the outputs."
    ],
    "correct": "c"
  },

  {
    "question": "You want to train an Artificial Neural Network for a complex classification problem. The information from the dataset is labeled in four classes. Each entry is composed from an array of five attributes and a label. What is a possible structure for this problem?",
    "answers": [
      "5 : 6 : 4",
      "7 : 6 : 4",
      "5 : 6 : 2",
      "6 : 4"
    ],
    "correct": "a"
  },
  {
    "question": "Check the correct affirmations regarding a population of individuals in an Evolutionary algorithm.",
    "answers": [
      "The candidates to solutions should be uniformly distributed in the search space (if it is possible).",
      "The population doesn’t change its contents during the entire run of the algorithm.",
      "The population is randomly assigned in the beginning of the algorithm.",
      "The reproduction pool is selected from the current population."
    ],
    "correct": "acd"
  },
  {
    "question": "Consider a permutation of n elements as representation for the \"n-Queen\" problem. Please check all the categories where this representation belongs:",
    "answers": [
      "non-binary, discrete",
      "continuous",
      "tree based",
      "class-based",
      "binary"
    ],
    "correct": "a"
  },
  {
    "question": "Consider the following formula:\n\nv_id = w * v_id + c1 * rand() * (P_bestd – x_id) + c2 * rand() * (G_bestd – x_id)\n\nCheck the correct statements related to this formula:",
    "answers": [
      "c1 and c2 will be determined by the algorithm while running.",
      "v_id is the velocity of a particle.",
      "You can find in this formula the current position and also the best position of a particle.",
      "It updates the position of the particle."
    ],
    "correct": "bc"
  },
  {
    "question": "Consider the fuzzy classes described by the following diagram. Compute the membership degree of value 10 to both classes (red and green).",
    "image": "imageQ5.png",
    "answers": [
      "μ_red(10) = 0.66 and μ_green(10) = 2.85",
      "μ_red(10) = 0.25 and μ_green(10) = 0.75",
      "μ_red(10) = 2 and μ_green(10) = 0.5",
      "μ_red(10) = 0 and μ_green(10) = 0"
    ],
    "correct": "d"
  },
  {
    "question": "In a feed forward Artificial Neural Network there are connections between nodes from the same layer.",
    "answers": [
      "True",
      "False"
    ],
    "correct": "b"
  },
  {
    "question": "Check some of the possible activation functions from an Artificial Neural Network.",
    "answers": [
      "Gaussian function",
      "Linear function",
      "Sigmoid function",
      "Error function",
      "Constant function"
    ],
    "correct": "abce"
  },
  {
    "question": "You attempt to solve a problem that fits a binary representation with a PSO. What will you change in order to conserve the representation while you adapt the particles’ positions using the velocity?",
    "answers": [
      "The process of updating the particle's position.",
      "Reset the particle position every time you get out of the domain.",
      "Reduce the inertia so the new update position will not exceed the domain.",
      "The evaluation of the best particle."
    ],
    "correct": "a"
  },
  {
    "question": "The Ant Colony Optimisation (based on the social behaviour of ants) has some particularities. Check the correct statements from the following list:",
    "answers": [
      "The worst individuals are replaced with the best ones.",
      "The search is guided by the variation operators towards the ant queen.",
      "The search operators are constructive ones, adding elements in solution.",
      "The search is cooperative, guided by the relative quality of individuals."
    ],
    "correct": "cd"
  },
  {
    "question": "When adding a new element to the partial solution within an Ant Colony Optimisation Algorithm the following elements can be considered (check all correct ones):",
    "answers": [
      "Probability of crossover",
      "Pheromone matrix",
      "Coefficient of the trail importance",
      "Coefficient of visibility importance",
      "Visibility of the nodes"
    ],
    "correct": "bcde"
  },
  {
    "question": "During the fire process within an artificial neuron the following processes take place (order is unimportant):",
    "answers": [
      "Performs a simple computation through an activation function",
      "Compute the weighted sum of inputs",
      "Compute the difference between the real output and the computed output",
      "Modify the weights such to obtain better results"
    ],
    "correct": "ab"
  },
  {
    "question": "You design an Ant Colony Optimisation algorithm. What are the aspects related to each ant that must be considered?",
    "answers": [
      "The ant has a memory",
      "While constructing the path avoids nodes that already have an ant in them",
      "Cooperates with other ants through the pheromone trail",
      "Moves (in the search space) and puts some pheromones on its path"
    ],
    "correct": "acd"
  },
  {
    "question": "A solution for a problem that you have is represented as a binary array of 8 elements. After a mutation you get the following mutated offspring: (1,1,1,0,1,0,0,1). Considering that you used a weak mutation, check the possible parent(s).",
    "answers": [
      "(1,1,1,0,1,0,0,1)",
      "(0,0,0,1,0,1,1,0)",
      "(0,0,1,0,1,0,0,1)",
      "(1,1,1,0,1,0,1,1)"
    ],
    "correct": "ad"
  },
  {
    "question": "A fitness function for a given problem aims to:",
    "answers": [
      "Associate a value to each candidate solution.",
      "Determine if the problem is properly defined.",
      "Combine individuals with similar characteristics.",
      "Reflect the adaptation to the environment."
    ],
    "correct": "ad"
  },
  {
    "question": "The knowledge base of a RBS in uncertain environments contains:",
    "answers": [
      "Representations of the optimum solutions",
      "Rules",
      "Facts",
      "Positions"
    ],
    "correct": "bc"
  },
  {
    "question": "The Defuzzification is the transformation each fuzzy region into a crisp value.",
    "answers": [
      "True",
      "False"
    ],
    "correct": "a"
  },
  {
    "question": "Consider a complete Artificial Neural Network with the structure 4:6:2. How many weights will have the fourth artificial neuron from the hidden layer?",
    "answers": [
      "4",
      "6",
      "2",
      "12"
    ],
    "correct": "a"
  },
  {
    "question": "The coding type of a possible solution influences the following aspects from the Evolutionary Algorithm’s design:",
    "answers": [
      "It forces the use of a binary crossover",
      "The type of variation operators",
      "The expression of the fitness function",
      "The number of individuals in the population pool"
    ],
    "correct": "bc"
  },
  {
    "question": "You have to choose a stop condition for your PSO algorithm. Check the correct possibilities:",
    "answers": [
      "You never stop; this sort of algorithm runs forever adapting itself.",
      "When you found the parameters c₁ and c₂.",
      "When you reach a predefined number of iterations.",
      "After you evaluate the fitness function a predefined number of times."
    ],
    "correct": "cd"
  },
  {
    "question": "Check the specific elements for the Particle Swarm Optimisation method:",
    "answers": [
      "Inertia",
      "Memory",
      "Velocity",
      "Position"
    ],
    "correct": "abcd"
  },
  {
    "question": "In each iteration of an Ant Colony Optimisation Algorithm we have the following steps (order does not matter):",
    "answers": [
      "Increase the partial solution by an element.",
      "Change the pheromone trail on the paths traversed.",
      "We perform a mutation to the ant’s partial solution.",
      "Initialisation."
    ],
    "correct": "abd"
  },
  {
    "question": "Is cooperation part of a Particle Swarm Optimisation algorithm?",
    "answers": [
      "True",
      "False"
    ],
    "correct": "a"
  },
  {
    "question": "How do ants indirectly communicate in an Ant Colony Optimisation algorithm?",
    "answers": [
      "They do not communicate indirectly.",
      "By changing the chemical repository.",
      "The ants send signals to other ants not to follow them within the partial path.",
      "Accessing the pheromone matrix."
    ],
    "correct": "bd"
  },
  {
    "question": "What is the correspondence of an individual in evolutionary computation?",
    "answers": [
      "A metaphor for an animal from a herd of solutions.",
      "A possible candidate to be a solution for our problem.",
      "The problem solution evolved by random natural processes.",
      "A simple artificial lifeform that exists inside the computer, with its aim to solve our problems."
    ],
    "correct": "b"
  },
  {
    "question": "Which of the following problems can be solved with a perceptron? (Select one or more)",
    "answers": [
      "Facial recognition",
      "Logic \"AND\"",
      "Any problem that implies a linear separation of the space",
      "XOR"
    ],
    "correct": "bc"
  },
  {
    "question": "Consider an Artificial Neural Network that must be trained with the Backpropagation algorithm. Check the correct statements for this algorithm:",
    "answers": [
      "Modify the structure by adding or subtracting nodes from the hidden layer.",
      "Distribute the errors on all connections proportional to the weights and modify the weights.",
      "Forward propagate the information and determine the output of each neuron.",
      "Establish and backward propagate the error."
    ],
    "correct": "bcd"
  },
  {
    "question": "The ReLu function:",
    "answers": [
      "Provides sparsity since y=0 when x>0.",
      "Has a vanishing gradient when x>0.",
      "Corrects the problems that occur at sigmoid function.",
      "It is a linear activation function."
    ],
    "correct": "c"
  },

  //////////////////////////////////////////////////////
  // TRAPS & VARIATIONS
  //////////////////////////////////////////////////////

  // --- Activation functions ---
  {
    "question": "The output range of the sigmoid (logistic) activation function is:",
    "answers": [
      "(-∞, +∞)",
      "(-1, 1)",
      "(0, 1)",
      "(-1, 0)"
    ],
    "correct": "c"
  },
  {
    "question": "Which is a key difference between the tanh and sigmoid activation functions?",
    "answers": [
      "Tanh has range (0, 1) while sigmoid has range (-1, 1)",
      "Tanh is zero-centered with range (-1, 1), while sigmoid outputs values in (0, 1)",
      "Tanh does not suffer from the vanishing gradient problem, but sigmoid does",
      "Tanh can only be used in the output layer while sigmoid can be used in hidden layers"
    ],
    "correct": "b"
  },
  {
    "question": "The 'dying ReLU' problem occurs because, for inputs x < 0:",
    "answers": [
      "The ReLU output is 1, causing the neuron to always fire",
      "The ReLU output is undefined for negative inputs",
      "Both the ReLU output and its derivative are 0, so the neuron never receives a gradient update",
      "The ReLU derivative is 1, causing exploding gradients"
    ],
    "correct": "c"
  },
  {
    "question": "ReLU provides sparsity in a neural network because:",
    "answers": [
      "It outputs zero for all positive inputs (x > 0), making many neurons inactive",
      "It outputs zero for all negative inputs (x ≤ 0), meaning many neurons contribute nothing",
      "It normalizes activations to have zero mean and unit variance",
      "It limits the gradient magnitude to avoid exploding gradients"
    ],
    "correct": "b"
  },
  {
    "question": "Leaky ReLU solves the dying ReLU problem by:",
    "answers": [
      "Capping the output at a fixed maximum value to prevent saturation",
      "Replacing the zero output for negative inputs with a small non-zero slope (e.g. 0.01·x)",
      "Adding a bias term that prevents the activation from reaching zero",
      "Using a stochastic threshold instead of a fixed zero boundary"
    ],
    "correct": "b"
  },

  // --- Loss functions ---
  {
    "question": "Compared to L2 loss (MSE), L1 loss (MAE) is:",
    "answers": [
      "More sensitive to outliers because it squares the errors",
      "Less sensitive to outliers because it does not square the errors",
      "Identical in sensitivity to outliers; only the gradient differs",
      "Only applicable when the model output is a binary label"
    ],
    "correct": "b"
  },
  {
    "question": "MSE (Mean Squared Error) is more sensitive to outliers than MAE (Mean Absolute Error) because:",
    "answers": [
      "MSE sums errors while MAE averages them",
      "MSE requires the outputs to be in the range [0, 1]",
      "Squaring each error causes large deviations to contribute disproportionately more to the total loss",
      "MSE is computed over the entire dataset while MAE is computed on a sample"
    ],
    "correct": "c"
  },
  {
    "question": "Cross-entropy loss is primarily used for:",
    "answers": [
      "Regression tasks where the output is a continuous real value",
      "Clustering tasks where there are no ground-truth labels",
      "Classification tasks where the output represents a probability distribution over classes",
      "Tasks where the model output must be in the range [-1, 1]"
    ],
    "correct": "c"
  },
  {
    "question": "For a 10-class problem, the outputs of the softmax layer:",
    "answers": [
      "Sum to 10, since each of the 10 outputs represents one class",
      "Each independently lie in (0, 1) and can sum to any positive value",
      "Sum to exactly 1.0, forming a valid probability distribution over all classes",
      "Sum to more than 1 when multiple classes have high confidence"
    ],
    "correct": "c"
  },

  // --- Gradient descent & optimization ---
  {
    "question": "Batch gradient descent (standard gradient descent):",
    "answers": [
      "Uses a single randomly selected sample to compute the gradient at each update",
      "Uses a randomly sampled mini-batch of fixed size at each update",
      "Uses the entire training dataset to compute the gradient at each update step",
      "Skips the gradient computation and directly adjusts weights based on error signs"
    ],
    "correct": "c"
  },
  {
    "question": "Gradient descent applied to a non-convex neural network loss surface:",
    "answers": [
      "Always converges to the global minimum",
      "Is guaranteed to find the optimal weights for any architecture",
      "Can get trapped in local minima or saddle points and has no global optimality guarantee",
      "Converges in a fixed number of steps regardless of the learning rate"
    ],
    "correct": "c"
  },
  {
    "question": "Momentum in SGD (Stochastic Gradient Descent with momentum):",
    "answers": [
      "Increases the learning rate when gradients are consistently large",
      "Accumulates a moving average of past gradients to accelerate training and dampen oscillations",
      "Reduces weight values by a fixed fraction at every update step",
      "Is equivalent to the learning rate but applied only to the bias terms"
    ],
    "correct": "b"
  },
  {
    "question": "Weight decay used during neural network training is mathematically equivalent to:",
    "answers": [
      "L1 regularization, which adds the sum of absolute weight values to the loss",
      "Dropout, which randomly zeros activations during training",
      "L2 regularization, which adds the sum of squared weight values to the loss",
      "Batch normalization, which re-scales activations within each mini-batch"
    ],
    "correct": "c"
  },
  {
    "question": "A model trained using Empirical Risk Minimization (ERM) minimizes loss on:",
    "answers": [
      "The true (unknown) data-generating distribution",
      "The test dataset held out for final evaluation",
      "The training dataset used during optimization",
      "The union of training and validation datasets"
    ],
    "correct": "c"
  },

  // --- ANN architecture & weight counting ---
  {
    "question": "In an ANN with structure 5 : 10 : 3, how many weights (excluding bias) does each neuron in the HIDDEN layer have?",
    "answers": [
      "10",
      "3",
      "5",
      "15"
    ],
    "correct": "c"
  },
  {
    "question": "In an ANN with structure 5 : 10 : 3, how many weights (excluding bias) does each neuron in the OUTPUT layer have?",
    "answers": [
      "5",
      "3",
      "10",
      "15"
    ],
    "correct": "c"
  },
  {
    "question": "A single perceptron with 3 input features has how many total learnable parameters (weights AND one bias)?",
    "answers": [
      "3",
      "4",
      "2",
      "6"
    ],
    "correct": "b"
  },
  {
    "question": "In a standard feedforward ANN, each neuron in a hidden layer:",
    "answers": [
      "Receives inputs from every neuron in the same hidden layer",
      "Receives inputs from every neuron in the previous layer",
      "Is connected to exactly one neuron from the previous layer",
      "Only connects directly to neurons in the output layer"
    ],
    "correct": "b"
  },
  {
    "question": "Which statement about deeper neural networks (adding more hidden layers) is FALSE?",
    "answers": [
      "Deeper networks can model more complex, hierarchical features",
      "Deeper networks are more susceptible to the vanishing gradient problem",
      "Adding more hidden layers always improves generalization on unseen test data",
      "Deeper networks typically require more careful initialization and regularization"
    ],
    "correct": "c"
  },

  // --- Perceptron & linear separability ---
  {
    "question": "A single perceptron using a sigmoid activation function:",
    "answers": [
      "Can solve XOR because sigmoid introduces a non-linear decision boundary",
      "Still can only classify linearly separable patterns, regardless of the activation function used",
      "Can solve any Boolean function with enough training data",
      "Can solve XOR if trained with a small enough learning rate"
    ],
    "correct": "b"
  },
  {
    "question": "Why can a single-layer perceptron NOT solve the XOR problem?",
    "answers": [
      "XOR requires more than two inputs, and the perceptron only handles two",
      "The XOR function is not linearly separable — no single hyperplane can separate its classes",
      "The perceptron uses the wrong activation function for Boolean problems",
      "XOR requires a continuous output, but the perceptron produces binary outputs"
    ],
    "correct": "b"
  },

  // --- Backpropagation ---
  {
    "question": "Which statement is TRUE about the backpropagation algorithm?",
    "answers": [
      "It guarantees convergence to the global minimum of the loss function",
      "It can only be applied to networks with a single hidden layer",
      "It efficiently computes all gradients by applying the chain rule in reverse through the network",
      "It updates the network architecture (number of neurons) to improve accuracy"
    ],
    "correct": "c"
  },
  {
    "question": "Which of the following is NOT a characteristic of the backpropagation algorithm?",
    "answers": [
      "It requires the derivative of each activation function to be known",
      "It propagates error signals from the output layer toward the input layer",
      "It guarantees finding the globally optimal weights for any network",
      "It relies on the chain rule of calculus to compute partial derivatives"
    ],
    "correct": "c"
  },

  // --- Regularization & generalization ---
  {
    "question": "A model is most likely overfitting when:",
    "answers": [
      "Both training loss and test loss are high",
      "Training loss is high and test loss is low",
      "Training loss is very low but test loss is significantly higher",
      "Both training loss and test loss are low and similar in value"
    ],
    "correct": "c"
  },
  {
    "question": "The purpose of dropout regularization is to:",
    "answers": [
      "Speed up forward pass computation by skipping neurons",
      "Reduce overfitting by forcing the network to learn redundant representations across different subsets of neurons",
      "Increase model capacity by adding effective neurons during training",
      "Normalize the output distribution of each layer"
    ],
    "correct": "b"
  },
  {
    "question": "During inference (test time), dropout in a neural network:",
    "answers": [
      "Is applied at the same dropout rate as during training for consistency",
      "Is disabled; all neurons are active and weights are typically scaled accordingly",
      "Is increased to reduce overfitting on unseen examples",
      "Only affects neurons in the output layer"
    ],
    "correct": "b"
  },
  {
    "question": "Adding more training data will always improve model accuracy.",
    "answers": [
      "True — more data always leads to a better model",
      "False — noisy, mislabeled, or non-representative data can hurt performance"
    ],
    "correct": "b"
  },
  {
    "question": "L1 regularization (Lasso) has a practical advantage over L2 (Ridge) because:",
    "answers": [
      "L1 always achieves lower training loss than L2",
      "L1 drives many weight values to exactly zero, enabling automatic feature selection",
      "L1 completely prevents overfitting on any dataset",
      "L1 is computationally cheaper because it avoids any squaring operations"
    ],
    "correct": "b"
  },

  // --- Train / val / test splits ---
  {
    "question": "The final, unbiased estimate of model performance should be computed on:",
    "answers": [
      "The training set, since we know the model predictions on it are reliable",
      "The validation set used to tune hyperparameters",
      "The test set, which the model has never seen during training or hyperparameter tuning",
      "A combination of training and validation sets for maximum data usage"
    ],
    "correct": "c"
  },
  {
    "question": "Why should hyperparameter tuning NOT be performed directly on the test set?",
    "answers": [
      "The test set is too small to give reliable accuracy estimates",
      "Using the test set for tuning causes information leakage, making the final reported accuracy optimistically biased",
      "Test set evaluation is computationally too expensive to run repeatedly",
      "The test set does not contain labels in standard ML workflows"
    ],
    "correct": "b"
  },
  {
    "question": "What distinguishes a hyperparameter from a model parameter?",
    "answers": [
      "Hyperparameters are learned from data; model parameters are set manually before training",
      "Model parameters are learned from data during training; hyperparameters are set before training and are not learned",
      "There is no difference — both terms refer to the weights and biases of a neural network",
      "Hyperparameters control the network structure only; model parameters control the loss function"
    ],
    "correct": "b"
  },
  {
    "question": "Which of the following are HYPERPARAMETERS (not learned from data during training)? (choose all correct)",
    "answers": [
      "The learning rate of gradient descent",
      "The weight values of a trained neural network",
      "The number of hidden layers in the network",
      "The bias values of each neuron after training"
    ],
    "correct": "ac"
  },

  // --- Metrics ---
  {
    "question": "The F1 score is the _____ of precision and recall.",
    "answers": [
      "arithmetic mean",
      "geometric mean",
      "harmonic mean",
      "weighted sum"
    ],
    "correct": "c"
  },
  {
    "question": "Precision in a binary classifier is defined as:",
    "answers": [
      "TP / (TP + FN) — fraction of actual positives correctly identified",
      "TP / (TP + FP) — fraction of predicted positives that are truly positive",
      "TN / (TN + FP) — fraction of actual negatives correctly rejected",
      "TN / (TN + FN) — fraction of predicted negatives that are truly negative"
    ],
    "correct": "b"
  },
  {
    "question": "Recall (sensitivity / true positive rate) is defined as:",
    "answers": [
      "TP / (TP + FP) — fraction of predicted positives that are truly positive",
      "TN / (TN + FP) — fraction of negatives correctly identified",
      "TP / (TP + FN) — fraction of actual positives correctly identified",
      "FP / (FP + TN) — the false positive rate"
    ],
    "correct": "c"
  },
  {
    "question": "A 'False Negative' (FN) in binary classification occurs when:",
    "answers": [
      "The model predicts positive and the true label is positive",
      "The model predicts negative and the true label is negative",
      "The model predicts positive and the true label is negative",
      "The model predicts negative but the true label is positive"
    ],
    "correct": "d"
  },
  {
    "question": "A 'False Positive' (FP) in binary classification occurs when:",
    "answers": [
      "The model predicts negative and the true label is negative",
      "The model predicts positive and the true label is positive",
      "The model predicts positive but the true label is negative",
      "The model predicts negative but the true label is positive"
    ],
    "correct": "c"
  },

  // --- Decision trees ---
  {
    "question": "The information gain ratio in decision trees was introduced to:",
    "answers": [
      "Increase the preference for attributes with many distinct values",
      "Replace entropy with the Gini impurity measure",
      "Reduce the bias towards attributes with many distinct values by normalizing information gain by the split information",
      "Guarantee that the resulting tree has the minimum number of leaves"
    ],
    "correct": "c"
  },

  // --- ConvNets ---
  {
    "question": "In a Convolutional Neural Network, the filter (kernel) weights are:",
    "answers": [
      "Always hand-crafted by the engineer prior to training",
      "Fixed using standard image-processing filters such as Sobel or Gaussian",
      "Learned automatically during training via backpropagation",
      "Randomly initialized and never updated throughout training"
    ],
    "correct": "c"
  },

  // --- PSO / ACO / GA distinctions ---
  {
    "question": "Which feature belongs to Particle Swarm Optimisation (PSO) but NOT to Ant Colony Optimisation (ACO)?",
    "answers": [
      "Pheromone trails that influence the probability of choosing a path",
      "Constructive search operators that build solutions step by step",
      "Particle velocity and personal-best position memory",
      "A pheromone evaporation mechanism to avoid premature convergence"
    ],
    "correct": "c"
  },
  {
    "question": "ACO and PSO are both nature-inspired algorithms. Which statement correctly distinguishes them?",
    "answers": [
      "Both use pheromone trails to guide the search",
      "ACO builds solutions constructively guided by pheromones; PSO moves particles through a continuous space using velocity",
      "PSO uses pheromone trails while ACO uses particle velocities",
      "They are identical in mechanism but differ only in the problems they are applied to"
    ],
    "correct": "b"
  },
  {
    "question": "In a Genetic Algorithm, the crossover operator:",
    "answers": [
      "Randomly changes individual bits of a solution to introduce diversity",
      "Guides the population toward the globally best individual found so far",
      "Combines parts of two parent solutions to produce one or more offspring",
      "Evaluates each individual's quality using the fitness function"
    ],
    "correct": "c"
  },
  {
    "question": "In a Genetic Algorithm, the mutation operator:",
    "answers": [
      "Combines parts of two parent chromosomes to create offspring",
      "Selects the best individuals to survive to the next generation",
      "Makes small random changes to an individual to maintain diversity and prevent premature convergence",
      "Evaluates the fitness of each candidate solution"
    ],
    "correct": "c"
  },

  // --- Misc traps ---
  {
    "question": "Which statement about Strong AI is correct?",
    "answers": [
      "Strong AI exists today in the form of large language models that reason across all domains",
      "Strong AI is a hypothetical form of AI with general human-like reasoning; no such system currently exists",
      "Strong AI is another name for deep learning, which uses many hidden layers",
      "Strong AI refers to AI systems that run on specialized GPU hardware"
    ],
    "correct": "b"
  },
  {
    "question": "The model in a machine learning system is best described as — choose the MOST precise answer:",
    "answers": [
      "The optimization algorithm (e.g., gradient descent) used to fit the parameters",
      "The training dataset used to compute the loss",
      "The loss function that measures prediction errors during training",
      "The parameterized function learned during training that is deployed to make predictions"
    ],
    "correct": "d"
  },
  {
    "question": "The role of the bias term in an artificial neuron is to:",
    "answers": [
      "Scale the weighted sum of inputs before applying the activation function",
      "Determine the learning rate for weight updates during backpropagation",
      "Shift the activation function threshold so the neuron can fire even when all inputs are zero",
      "Connect the neuron to the previous layer's outputs via a weighted link"
    ],
    "correct": "c"
  },
  {
    "question": "In the PSO velocity update v = w·v + c1·r1·(pbest − x) + c2·r2·(gbest − x), the term c1 is called the:",
    "answers": [
      "Social coefficient — pulling the particle toward the global best position",
      "Inertia weight — controlling the balance between exploration and exploitation",
      "Cognitive coefficient — pulling the particle toward its own personal best position",
      "Stochastic coefficient — introducing randomness into the velocity update"
    ],
    "correct": "c"
  },
];

// Total questions for reference
const TOTAL_QUESTIONS = questions.length;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questions, TOTAL_QUESTIONS };
}

// Make available globally for browser
if (typeof window !== 'undefined') {
  window.questions = questions;
  window.TOTAL_QUESTIONS = TOTAL_QUESTIONS;
} 