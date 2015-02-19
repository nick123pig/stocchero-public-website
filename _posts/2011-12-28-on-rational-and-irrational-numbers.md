---
layout: post
title: On Rational And Irrational Numbers
created: 1325034832
---
<p><h2>Abstract</h2></p>
<p>The purpose of this essay shall be to examine the differences and similarities between the set of rational numbers, $\mathbb{Q}$ and the set of irrational numbers.  We shall also examine some proofs of how both sets are dense in the set of real numbers, $\mathbb{R}$. </p>
<p><h2>Set of Rationals is Dense in set of Reals</h2></p>
<p> <em>Proposition</em>: $\mathbb{Q}$ is dense in $\mathbb{R}$<br />
  <em>Proof</em>: Let $a$ and $b$ be real numbers such that $ a &lt; b $. We need to show $(a,b)$ contains a rational number. The Archimedian Property will be essential to this proof. The archimedian property says that \textit{for any positive $\varepsilon$, there exists an $n \in \mathbb{N}$ such that $1/n < \varepsilon$. Therefore, we can choose an $n\in \mathbb{N}$ such that $$\frac{1}{n} < b-a$$ Now, by the theorem that states for any number $c$, there is exactly one integer $k$ in the interval $[c,c+1]$ we can say that there exists an integer $m$ in the interval $[nb-1, nb)$ if we let $c \equiv nb-1$. Thus, $$ nb-1 \leq m < nb$$ Now divide every term by $n$ to get $$b-1/n \leq m/n < b$$ But by the archimedian property, $1/n < b-a$, so $$a = b-(b-a) < b - 1/n$$ Therefore, the rational number $m/n \in (a,b)$, which implies that $\mathbb{Q}$ is dense in $\mathbb{R}$.
</p>
<p><h2>Set of Irrationals is Dense in the set of Reals</h2></p>
<p> <em>Proposition</em>: The uncountable set of irrational numbers is dense in $\mathbb{R}$<br />
<em>Proof</em>: The proof of this proposition is a consequence of the proof that any rational number is dense in $\mathbb{R}$. Choose any positive irrational number, say $z$. By the density of $\mathbb{R}$, there is a rational $r$ in $$ (\displaystyle\frac{a}{z},\frac{b}{z})$$ such that $zx$ lies in the interval $(a,b)$ and $zx$ is irrational since it's the product of a rational number and irrational number. Therefore, the uncountable set of irrational numbers is dense in $\mathbb{R}$</p>
<p><h2>Bijective Function from Natural numbers to Rational Numbers</h2></p>
<p> A function is a bijection (one-to-one correspondence) if and only if it has an inverse $f$ which is equal to it's own inverse. In order for a function to be bijective, the cardinalities of the domain and range must be equal. 
  
  The Cantor pairing function satisfies this condition. The Cantor pairing function is a pairing function $$f: \mathbb{Q} \to \mathbb{N}$$ defined by $$f(k_1,k_2) = \frac{1}{2}(k_1+k_2)(k_1+k_2+1)+k2 \text{ where } \{ k_1, k_2 | \frac{k_1}{k_2} \in \mathbb{Q} \}$$ 
  
  We must make sure that the function is both (1) one-to-one and (2) onto. Suppose we are given $z$ with
  \begin{align*}
  z &= \langle x,y \rangle = \frac{(x+y)(x+y+1)}{2} +y 
  \end{align*}
  and we want to find $x$ and $y$. It is helpful to define some intermediate values in the calculation:
  \begin{align*}
  w &= x + y \\
  t &= \frac{w(w + 1)}{2} = \frac{w^2 + w}{2} \\
  z &= t + y 
  \end{align*}
  where $t$ is the triangle number of $w$. If we solve the quadratic equation
  \begin{align*}  
  w^2 + w - 2t = 0 \Rightarrow     w = \frac{\sqrt{8t + 1} - 1}{2} 
  \end{align*}
  which is a strictly increasing and continuous function when t is non-negative real. Since
  \begin{align*} 
  t \leq z = t + y < t + (w + 1) = \frac{(w + 1)^2 + (w + 1)}{2} 
  \end{align*}
  we get that
  \begin{align*} 
  w &\leq \frac{\sqrt{8z + 1} - 1}{2} < w + 1 \\
  w &= \left\lfloor \frac{\sqrt{8z + 1} - 1}{2} \right\rfloor 
  \end{align*}
  So to calculate x and y from z,
  
  \begin{align*}
  w &= \left\lfloor \frac{\sqrt{8z + 1} - 1}{2} \right\rfloor \\
  t &= \frac{w^2 + w}{2} \\
  y &= z - t \\
  x &= w - y 
  \end{align*}
  Here we have shown the inverse of the Cantor pairing function. Therefore, it must be one-to-one and onto. Thus, the Cantor Pairing Function is the one-to-one function that $\mathbb{N} \to \mathbb{Q}$
</p>
<p><h2>Bijective function from Natural numbers to Irrational Numbers</h2></p>
<p> We can show that there exists no bijective function that maps the natural numbers to Irrational numbers. We know that for a bijective function (a function with one-to-one correspondence between domain and range) to exist, the cardinalities of the domain and range must be equal. 
  
</p>
<p><strong>Definition</strong>: A <em>countable</em> set is a set with the same cardinality (number of elements) as some subset of the set of natural numbers.
  
  </p>
<p><strong>Lemma</strong>: $\mathbb{R}$ is uncountable. 
  
  </p>
<p><em>Proof</em>: Assume (for a contradiction) that R is countable. Each $a \in \mathbb{R}$ can be expressed as an infinite decimal. Suppose the 1-to-1 correspondence with $\mathbb{N}$ is :
  \begin{align*}
  1 &\rightarrow &&n_1 &&\textbf{.} &&a_1 &&b_1 &&c_1 &&d_1 &&\cdots \\
  2 &\rightarrow &&n_2 &&\textbf{.} &&a_2 &&b_2 &&c_2 &&d_2 &&\cdots \\
  3 &\rightarrow &&n_3 &&\textbf{.} &&a_3 &&b_3 &&c_3 &&d_3 &&\cdots \\
  \end{align*}
  where $n_i \in \mathbb{N}$ and $a_i,b_i,c_i,d_i,... \in \mathbb{R}$ and every real 
  such that every real number appears once in $a_i,b_i,c_i,d_i,...$
  Now choose a real number $\varphi = 0.[a_t][b_t][c_t][d_t]...$ such that $a_t \neq a_1, b_t \neq b_2, c_t \neq c_3,...$ Then $\varphi$ is different from all those in the list, and hence there cannot exist such a 1-to-1 correspondence between $\mathbb{N}$ and $\mathbb{R}$. Therefore, $\mathbb{R}$ is uncountable. </p>
<p> The proof of there exists no bijective function that maps the natural numbers to Irrational numbers follows immediately<br />
  <em>Proof</em>: Since $\mathbb{R}$ is an uncountable set, of which the rationals are a countable subset, the complementary set of irrationals is uncountable. We cannot have a bijective function for a set that is uncountable, therefore, there exists no bijective function that maps the natural numbers to the set of all irrational numbers.
  
  </p>
<p><h2>Similarities & Difference of Rationals and Irrationals</h2></p>
<ul>
  <li>  Both irrational and rational numbers are all subsets of the real numbers. Composed together, their union fully makes up the set of all real numbers, $\mathbb{R}$    </li>
  <li>The set of rational numbers is countable, and the set of irrational numbers is uncountable. This implies the fact that the set of irrationals are infinitely larger than the set of rational numbers. This is somewhat surprising, as most humans know many more rational numbers then they do irrationals.    </li>
  <li>The set of irrational numbers are not complete. The study of calculus with irrational numbers is extremely limited due to this fact.    </li>
  <li>Multiplying two rational numbers <em>always</em> returns a rational number. Multiplying two irrational numbers <em>sometimes</em> returns a rational number. </li>
  <li>The sum, difference, product and quotient of two non-zero real numbers, from which one is rational and the other irrational, is <em>always</em> irrational. </li>
  <li> Suprisingly, there exist irrational numbers $a$ and $b$ so that $a^b$ is rational. The non-constructive proof is as follows: We know that $\sqrt{2}$ is irrational. If $a=\sqrt{2}$ and $b=\sqrt{2}$ satisfy the conclusion of the theorem, we are done. If not, then $a^b$ is irrational, so let us now revalue $a$ as our previous $a^b$, and reapply the theorem. Again, let $b=\sqrt{2}$, and it's easy to see that $a^b=2$ which is rational, which proves our claim.. </li>
</ul>
