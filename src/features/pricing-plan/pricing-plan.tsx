import { useRef, useState } from "react";
import { Check, Loader } from "lucide-react";
import { motion } from "framer-motion";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { plans } from "@/constant";
import { ChatBox } from "@/components/chat-box";

const MotionCard = motion(Card);
const MotionButton = motion(Button);

export const PricingPlan = () => {
  const [isLoading, setIsLoading] = useState(false);
  const tawkMessengerRef = useRef<TawkMessengerReact>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const featureItem = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleGetStarted = async (planName: string) => {
    setIsLoading(true);
    try {
      await new Promise<void>((resolve, reject) => {
        tawkMessengerRef.current?.setAttributes(
          {
            Plan: planName,
            Interest: `Interested in ${planName} plan`,
          },
          (error: any) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          },
        );
      });

      tawkMessengerRef.current?.toggle();
    } catch (error) {
      console.error("Error setting up chat:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section
        className="w-full mx-auto flex flex-col px-2 items-center"
        id="about"
      >
        <motion.h1
          className="font-bold text-2xl md:text-3xl lg:text-4xl flex justify-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Home information and Amenities
        </motion.h1>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Select the perfect settling package for your needs
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {plans.map((plan, index) => (
            <MotionCard
              key={plan.name}
              className="flex flex-col"
              variants={item}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              <CardHeader className="p-2 md:p-4 items-center">
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="mt-2 text-center">
                  {plan.description}
                </CardDescription>
                <motion.div
                  className="mt-4 flex flex-col justify-center items-center"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">
                    starting from
                  </span>
                </motion.div>
              </CardHeader>

              <CardContent className="flex-grow p-2 md:p-4">
                <motion.ul
                  className="space-y-3"
                  initial="hidden"
                  animate="show"
                  variants={{
                    show: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3 + index * 0.1,
                      },
                    },
                  }}
                >
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start"
                      variants={featureItem}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>

              <CardFooter>
                <MotionButton
                  className="w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={() => handleGetStarted(plan.name)}
                  disabled={isLoading}
                >
                  {isLoading && <Loader size={20} className="animate-spin" />}
                  {isLoading ? "Loading..." : "Chat with Us"}
                </MotionButton>
              </CardFooter>
            </MotionCard>
          ))}
        </motion.div>
      </section>

      <ChatBox tawkMessengerRef={tawkMessengerRef} />
    </>
  );
};
