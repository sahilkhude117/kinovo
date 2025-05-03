'use client';

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

type AgeGroup = '1-2'| '3-4' | '5-6' | '7+';
type Gender = 'Boy' | 'Girl';
type Stage = 'age' | 'profile' | 'knowledge' | 'preferences' | 'analyzing' | 'results';
type QuestionType = {
    question: string;
    options?: string[];
    type: 'boolean' | 'choice' | 'image-choice';
};

export default function QuizPage() {
    const [stage, setStage] = useState<Stage>('age');
    const [ageGroup, setAgeGroup] = useState<AgeGroup | null>(null);
    const [gender, setGender] = useState<Gender | null>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, any>>({});
    const [totalProgress, setTotalProgress] = useState(0);
    const [analyzingProgress, setAnalyzingProgress] = useState({
        analyzing: 0,
        games: 0,
        plan: 0,
    });
    const [childLevel, setChildLevel] = useState<string>('Pre-K');
    const [overlayVisible, setOverlayVisible] = useState(false);

    const router = useRouter();

    // Calculate total stages and questions
    const totalStages = ['profile', 'knowledge', 'preferences'];
    const profileQuestions = [
        { question: "Choose your child's gender", type: "choice", options: ["Boy", "Girl"] },
        { question: "Does your child have siblings?", type: "boolean" },
    ];

    const getKnowledgeQuestions = (): QuestionType[] => {
        switch (ageGroup) {
            case '1-2':
            case '3-4':
                return [
                    { question: 'Can your child recognize and write numbers from 1 to 10?', type: 'boolean' },
                    { question: "Can your child scribble with a crayon or marker?", type: "boolean" },
                    { question: "Can your child combine two words into simple phrases?", type: "boolean" },
                    { question: "Does your child recognize basic shapes?", type: "boolean" },
                    { question: "Does your child explore how things work?", type: "boolean" },
                ];
            case '5-6':
                return [
                    { question: "Can your child memorize poems or songs?", type: "boolean" },
                    { question: "Does your child know the alphabet?", type: "boolean" },
                    { question: "Can your child count these animals?", type: "boolean" },
                    { question: "Can your child do simple math equations?", type: "boolean" },
                    { question: "Does your child recognize basic shapes?", type: "boolean" },
                ];
            case "7+":
                return [
                    { question: "Can your child write the first name?", type: "boolean" },
                    { question: "Can your child listen to a short story and answer questions about it?", type: "boolean" },
                    { question: "Can your child recognize and write numbers from 20 to 1?", type: "boolean" },
                    { question: "Can your child solve simple addition or subtraction problems?", type: "boolean" },
                    { question: "Can your child tell what has changed about this figure?", type: "boolean" },
                ];
            default:
                return [];
        }
    };

    const preferenceQuestions: QuestionType[] = [
        { question: "What is your child's favorite way to play?", options: ["With others", "Independently"], type: "choice" },
        { question: "Can your child use a phone or tablet by him/herself?", type: "boolean" },
        { question: "What types of activities does your child need?", 
          options: ["New games and activities", "Education preparation", "Variety in the daily routine"], 
          type: "choice" },
        { question: "Which learning activities does your child prefer?", 
          options: ["Videos", "Games", "Books", "Offline activities"], 
          type: "choice" },
        { question: "Does this statement apply to you?", 
          options: ["Yes", "No"], 
          type: "choice" },
        { question: "How often does your child have tantrums?", 
          options: ["Every day", "A few times per week", "Almost never"], 
          type: "choice" },
    ];

    // Get total questions
    const getTotalQuestions = () => {
        return profileQuestions.length + getKnowledgeQuestions().length + preferenceQuestions.length;
    };

    // Get completed questions
    const getCompletedQuestions = () => {
        let completed = 0;
        
        if (stage === 'profile') {
            completed = currentQuestionIndex;
        } else if (stage === 'knowledge') {
            completed = profileQuestions.length + currentQuestionIndex;
        } else if (stage === 'preferences') {
            completed = profileQuestions.length + getKnowledgeQuestions().length + currentQuestionIndex;
        } else if (stage === 'analyzing' || stage === 'results') {
            completed = getTotalQuestions();
        }
        
        return completed;
    };

    // Update total progress whenever stage or currentQuestionIndex changes
    useEffect(() => {
        if (stage !== 'age' && stage !== 'analyzing' && stage !== 'results') {
            const completedQuestions = getCompletedQuestions();
            const totalQuestions = getTotalQuestions();
            setTotalProgress((completedQuestions / totalQuestions) * 100);
        }
    }, [stage, currentQuestionIndex, ageGroup]);

    useEffect(() => {
        if (stage === 'profile' && currentQuestionIndex === 0) {
            setOverlayVisible(true);
        } else if (stage === 'preferences' && currentQuestionIndex === 0) {
            setOverlayVisible(true);
        } else if (stage === 'analyzing') {
            setOverlayVisible(true);
        }
    }, [stage, currentQuestionIndex]);

    useEffect(() => {
        if (stage === 'analyzing') {
          // Starting values
          setAnalyzingProgress({
            analyzing: 0,
            games: 0,
            plan: 0
          });
      
          // Smooth increments for each progress bar
          const analyzingInterval = setInterval(() => {
            setAnalyzingProgress(prev => {
              if (prev.analyzing < 100) {
                return { ...prev, analyzing: Math.min(prev.analyzing + 1, 100) };
              }
              return prev;
            });
          }, 50); // 50ms interval for smooth animation (20 updates per second)
      
          const gamesInterval = setInterval(() => {
            setAnalyzingProgress(prev => {
              if (prev.games < 100) {
                return { ...prev, games: Math.min(prev.games + 1, 100) };
              }
              return prev;
            });
          }, 60); // Slightly slower than analyzing
      
          const planInterval = setInterval(() => {
            setAnalyzingProgress(prev => {
              if (prev.plan < 100) {
                return { ...prev, plan: Math.min(prev.plan + 1, 100) };
              }
              return prev;
            });
          }, 70); // Even slower for the plan
      
          // Set timeout to move to results stage after all bars complete
          const resultsTimer = setTimeout(() => {
            setStage('results');
          }, 7500); // Allow enough time for all progress bars to complete
      
          // Clean up all intervals and timers
          return () => {
            clearInterval(analyzingInterval);
            clearInterval(gamesInterval);
            clearInterval(planInterval);
            clearTimeout(resultsTimer);
          };
        }
    }, [stage]);

    const getCurrentQuestions = () => {
        switch (stage) {
            case 'profile':
                return profileQuestions;
            case 'knowledge':
                return getKnowledgeQuestions();
            case 'preferences':
                return preferenceQuestions;
            default:
                return [];
        }
    };

    const questions = getCurrentQuestions();
    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (answer: any) => {
        const updatedAnswers = { ...answers, [stage + '-' + currentQuestionIndex]: answer };
        setAnswers(updatedAnswers);

        if (currentQuestionIndex >= questions.length - 1) {
            handleCompleteStage();
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleCompleteStage = () => {
        setCurrentQuestionIndex(0);

        switch (stage) {
            case 'age':
                setStage('profile');
                break;
            case 'profile':
                setStage('knowledge');
                break;
            case 'knowledge':
                setStage('preferences');
                break;
            case 'preferences':
                setStage('analyzing');
                break;
            default:
                break;
        }
    };

    const handleAgeSelect = (age: AgeGroup) => {
        setAgeGroup(age);
        handleCompleteStage();
    }

    const hideOverlay = () => {
        setOverlayVisible(false);
    };

    const getStageTitle = () => {
        switch (stage) {
            case 'profile':
                return "Child's Profile";
            case 'knowledge':
                return 'Knowledge and Skills';
            case 'preferences':
                return 'Learning Preferences';
            default:
                return "";
        }
    };

    const renderStage = () => {
        switch (stage) {
            case 'age':
                return (
                    <div className="flex flex-col items-center space-y-4">
                        <h1 className="text-2xl font-bold text-[#13C0FA] mb-4">How old is your Child?</h1>
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <AgeCard age="1-2" onClick={() => handleAgeSelect("1-2")} />
                            <AgeCard age="3-4" onClick={() => handleAgeSelect("3-4")} />
                            <AgeCard age="5-6" onClick={() => handleAgeSelect("5-6")} />
                            <AgeCard age="7+" onClick={() => handleAgeSelect("7+")} />
                        </div>
                    </div>
                );

            case 'profile':
            case 'knowledge':
            case 'preferences':
                if (stage === 'preferences' && currentQuestionIndex === 4) {
                    // Special rendering for the screen time question
                    return (
                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-full mb-4">
                                <div className="flex justify-between mb-1">
                                    <div className="text-sm">Learning plans</div>
                                    <div className="text-sm font-medium">{Math.round(totalProgress)}%</div>
                                </div>
                                <Progress value={totalProgress} className="h-2"/>
                            </div>

                            <h1 className="text-xl font-bold text-[#13C0FA] text-center">Does this statement apply to you?</h1>

                            <div className="bg-yellow-50 p-4 rounded-lg w-full my-4">
                                <blockquote className="text-base">
                                    "My child has too much screen time playing games and watching cartoons. I'm worried it's causing them to be spoiled or have bad behavior."
                                </blockquote>
                            </div>

                            <div className="grid grid-cols-2 gap-4 w-full mt-4">
                                <Button
                                    variant='outline'
                                    className="py-6 flex items-center justify-center rounded-full"
                                    onClick={() => handleAnswer(false)}
                                >
                                    <XCircle className="h-6 w-6 text-red-500 mr-2"/>
                                    <span>No</span>
                                </Button>
                                <Button
                                    variant='outline'
                                    className="py-6 flex items-center justify-center rounded-full"
                                    onClick={() => handleAnswer(true)}
                                >
                                    <CheckCircle className="h-6 w-6 text-green-500 mr-2"/>
                                    <span>Yes</span>
                                </Button>
                            </div>
                        </div>
                    );
                } else if (stage === 'preferences' && currentQuestionIndex === 5) {
                    // Special rendering for the tantrum question
                    return (
                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-full mb-4">
                                <div className="flex justify-between mb-1">
                                    <div className="text-base">Learning plans</div>
                                    <div className="text-sm font-medium">{Math.round(totalProgress)}%</div>
                                </div>
                                <Progress value={totalProgress} className="h-2"/>
                            </div>

                            <h1 className="text-xl font-bold text-[#13C0FA] text-center">How often does your child have tantrums?</h1>

                            <div className="flex flex-col space-y-3 w-full mt-8">
                                {currentQuestion.options?.map((option, index) => (
                                    <Button
                                        key={index}
                                        variant='outline'
                                        className="py-6 justify-center rounded-full"
                                        onClick={() => handleAnswer(option)}
                                    >
                                        {option}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-full mb-4">
                                <div className="flex justify-between mb-1">
                                    <div className="text-sm">{getStageTitle()}</div>
                                    <div className="text-sm font-medium">{Math.round(totalProgress)}%</div>
                                </div>
                                <Progress value={totalProgress} color='#13C0FA' className="h-2"/>
                            </div>

                            <h1 className="text-xl font-bold text-[#13C0FA] text-center">{currentQuestion?.question}</h1>

                            {currentQuestion?.type === 'boolean' && (
                                <div className="grid grid-cols-2 gap-4 w-full mt-8">
                                    <Button
                                        variant='outline'
                                        className="py-6 flex items-center justify-center rounded-full"
                                        onClick={() => handleAnswer(false)}
                                    >
                                        <XCircle className="h-6 w-6 text-red-500 mr-2"/>
                                        <span>No</span>
                                    </Button>
                                    <Button
                                        variant='outline'
                                        className="py-6 flex items-center justify-center rounded-full"
                                        onClick={() => handleAnswer(true)}
                                    >
                                        <CheckCircle className="h-6 w-6 text-green-500 mr-2"/>
                                        <span>Yes</span>
                                    </Button>
                                </div>
                            )}

                            {currentQuestion?.type === 'choice' && currentQuestion.options && (
                                <div className="flex flex-col space-y-3 w-full mt-4">
                                    {currentQuestion.options.map((option, index) => (
                                        <Button
                                            key={index}
                                            variant='outline'
                                            className="py-6 justify-start rounded-full"
                                            onClick={() => handleAnswer(option)}
                                        >
                                            {option}
                                        </Button>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                }

            case 'analyzing':
                return (
                    <div className="flex flex-col items-center space-y-8">
                        <h1 className="text-2xl font-bold text-[#13C0FA]">Creating your personal learning program</h1>

                        <div className="w-full space-y-6">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <div className="text-sm">Analyzing your answers</div>
                                    <div className="text-sm font-medium">{analyzingProgress.analyzing}%</div>
                                </div>
                                <Progress value={analyzingProgress.analyzing} className="h-2 bg-green-100" />
                            </div>

                            <div>
                                <div className="flex justify-between mb-1">
                                    <div className="text-sm">Setting up educational games</div>
                                    <div className="text-sm font-medium">{analyzingProgress.games}%</div>
                                </div>
                                <Progress value={analyzingProgress.games} className="h-2 bg-purple-100" />
                            </div>
                            
                            <div>
                                <div className="flex justify-between mb-1">
                                    <div className="text-sm">Preparing learning plan</div>
                                    <div className="text-sm font-medium">{analyzingProgress.plan}%</div>
                                </div>
                                <Progress value={analyzingProgress.plan} className="h-2 bg-teal-100" />
                            </div>
                        </div>

                        <div className="my-auto text-center">
                            <p className="font-medium">Enjoyed by 1M+ parents</p>
                            <Card className="p-4 mt-2">
                                <div className="flex mb-1">
                                    <span className="text-yellow-500">★★★★★</span>
                                    <span className="ml-auto text-sm text-gray-500">by Analuxubu Katz</span>
                                </div>
                                <p className="text-sm">
                                    There are <strong>so many brilliant</strong> games inside the IntellectoKids app. 
                                    From <strong>musical</strong> instruments to <strong>dinosaurs</strong>...whatever your 
                                    younger kids might need...Its <strong>all here</strong> in spades.
                                </p>
                            </Card>
                        </div>
                    </div>
                );
            
            case 'results':
                return (
                    <div className="flex flex-col items-center min-h-screen">
                    <div className="flex flex-col items-center space-y-2 w-full">
                        <h1 className="text-2xl font-bold text-[#13C0FA]">Your Quiz Results!</h1>
                        
                        <div className="bg-blue-50 rounded-lg p-4 w-full">
                        <div className="flex items-center mb-4">
                            <div className="h-2 bg-[#13C0FA] flex-1 rounded-full"></div>
                            <div className="h-2 bg-blue-300 flex-1 rounded-full"></div>
                            <div className="h-2 bg-gray-200 flex-1 rounded-full"></div>
                            <div className="h-2 bg-gray-200 flex-1 rounded-full"></div>
                        </div>
                        
                        <h2 className="text-lg font-medium mb-1">Your child level is:</h2>
                        <h1 className="text-3xl font-bold text-yellow-500 mb-4">{childLevel}</h1>
                        <p className="text-sm">
                            We recommend using the KINOVO app, including learning games and daily worksheets,
                            to develop your child's skills!
                        </p>
                        </div>
                        
                        <div className="mt-6 w-full">
                        <h2 className="text-lg font-medium mb-3">We analyzed your data:</h2>
                        <div className="space-y-4">
                            <div className="flex items-center p-3 bg-blue-50 rounded">
                            <span className="flex-1">Knowledge and skills</span>
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            </div>
                            <div className="flex items-center p-3 bg-blue-50 rounded">
                            <span className="flex-1">Child's Preferences</span>
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            </div>
                            <div className="flex items-center p-3 bg-blue-50 rounded">
                            <span className="flex-1">Your Pattern</span>
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    <div className="w-full mt-20 mb-6">
                        <Button
                            className="w-full bg-[#13C0FA] hover:bg-[#FBB406] font-baloo text-xl font-bold text-white p-6 rounded-full"
                            onClick={() => router.push('https://rzp.io/rzp/kj0uP2Ui')}
                        >
                        Continue To See Your Plan!
                        </Button>
                        <p className="text-xs text-center text-gray-500 mt-2">
                        Your personalized plan will be available after creating your account
                        </p>
                    </div>
                    </div>
                );
    
        }
    };

    // const renderProgressIndicator = () => {
    //     return (
    //         <div className="flex items-center mb-6">
    //             <div className={`flex items-center justify-center w-6 h-6 rounded-full ${stage !== 'age' ? 'bg-blue-600' : 'bg-gray-200'} text-white text-xs`}>
    //                 <CheckCircle className="h-4 w-4" />
    //             </div>
    //             <div className={`h-1 flex-1 ${stage !== 'age' ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                
    //             <div className={`flex items-center justify-center w-6 h-6 rounded-full ${(stage === 'knowledge' || stage === 'preferences' || stage === 'analyzing' || stage === 'results') ? 'bg-blue-600' : 'bg-gray-200'} text-white text-xs`}>
    //                 <CheckCircle className="h-4 w-4" />
    //             </div>
    //             <div className={`h-1 flex-1 ${(stage === 'knowledge' || stage === 'preferences' || stage === 'analyzing' || stage === 'results') ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                
    //             <div className={`flex items-center justify-center w-6 h-6 rounded-full ${(stage === 'preferences' || stage === 'analyzing' || stage === 'results') ? 'bg-blue-600' : 'bg-gray-200'} text-white text-xs`}>
    //                 <CheckCircle className="h-4 w-4" />
    //             </div>
    //             <div className={`h-1 flex-1 ${(stage === 'preferences' || stage === 'analyzing' || stage === 'results') ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                
    //             <div className={`flex items-center justify-center w-6 h-6 rounded-full ${(stage === 'analyzing' || stage === 'results') ? 'bg-blue-600' : 'bg-gray-200'} text-white text-xs`}>
    //                 {(stage === 'analyzing' || stage === 'results') ? <CheckCircle className="h-4 w-4" /> : '4'}
    //             </div>
    //             <div className={`h-1 flex-1 ${(stage === 'results') ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                
    //             <div className={`flex items-center justify-center w-6 h-6 rounded-full ${stage === 'results' ? 'bg-blue-600' : 'bg-gray-200'} text-white text-xs`}>
    //                 {stage === 'results' ? <CheckCircle className="h-4 w-4" /> : '5'}
    //             </div>
    //         </div>
    //     );
    // };

    const AgeCard = ({ age, onClick }: { age: string; onClick: () => void }) => {
        const getEmoji = () => {
            switch (age) {
                case "1-2":
                    return "👶";
                case "3-4":
                    return "🧒";
                case "5-6":
                    return "👦";
                case "7+":
                    return "👧";
                default:
                    return "👶";
            }
        };

        return (
            <div 
                onClick={onClick}
                className="flex flex-col overflow-hidden rounded-lg border border-blue-200 cursor-pointer hover:shadow-md transition-all"
            >
                <div className="bg-blue-50 p-4 aspect-square flex items-center justify-center">
                    <img 
                        src={`/api/placeholder/140/140`}
                        alt={`Child age ${age}`}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="bg-[#13C0FA] font-baloo text-xl text-white py-2 px-4 text-center">
                    Age: {age} {age === "7+" ? "→" : "→"}
                </div>
            </div>
        );
    };

    const renderOverlay = () => {
        if (!overlayVisible) return null;

        if (stage === 'profile' && currentQuestionIndex === 0) {
            return (
                <div className="flex-1 max-w-md mx-auto w-full fixed inset-0 z-50 bg-[#ffffff] flex flex-col items-center justify-center p-6">
                    <h1 className="text-2xl font-bold text-[#13C0FA] mb-4">We are glad you are here!</h1>
                    <p className="text-center mb-6">
                        Let's create a personalized learning plan that helps your child learn through play, 
                        combining fun games, worksheets, and interactive cartoons.
                    </p>

                    <div className="mb-8">
                        <img 
                            src="/api/placeholder/200/200" 
                            alt="Cat mascot" 
                            className="mx-auto"
                        />
                    </div>

                    <Button
                        className="w-full bg-[#13C0FA] hover:bg-[#FBB406] font-baloo text-xl font-bold text-white py-4"
                        onClick={hideOverlay}
                    >
                        CONTINUE
                    </Button>
                </div>
            );
        } else if (stage === 'preferences' && currentQuestionIndex === 0) {
            return (
                <div className="flex-1 max-w-md mx-auto w-full fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-6">
                    <h1 className="text-2xl font-bold text-[#13C0FA] mb-4">Good job!</h1>
                    <p className="text-center mb-6">
                        We'll use your answers to create a suitable learning plan for your child, 
                        covering essential preschool topics
                    </p>

                    <div className="mb-8">
                        <img 
                            src="/api/placeholder/200/200" 
                            alt="Child in rocket" 
                            className="mx-auto"
                        />
                    </div>
                    
                    <Button 
                        className="w-full bg-[#13C0FA] hover:bg-[#FBB406] font-baloo text-xl font-bold text-white py-4"
                        onClick={hideOverlay}
                    >
                        CONTINUE
                    </Button>
                </div>
            );
        } else if (stage === 'analyzing') {
            return (
                <div className="flex-1 max-w-md mx-auto w-full fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-6">
                    <div className="mb-4">
                        <img 
                            src="/api/placeholder/200/200" 
                            alt="Cat writing" 
                            className="mx-auto"
                        />
                    </div>
                    
                    <h1 className="text-2xl font-bold text-[#13C0FA] mb-2">Almost there!</h1>
                    <p className="text-center mb-8">
                        We need to understand your child's preferences to enhance the learning experience. 
                        Just a few more steps left!
                    </p>
          
                    <Button 
                        className="w-full bg-[#13C0FA] hover:bg-[#FBB406] font-baloo text-xl font-bold text-white py-4"
                        onClick={hideOverlay}
                    >
                        CONTINUE
                    </Button>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <main className="flex-1 max-w-md mx-auto w-full p-4">
                <div className="p-6 relative">
                    {stage !== 'age' && stage !== 'analyzing' && stage !== 'results'}
                    {renderStage()}
                    {renderOverlay()}
                </div>
            </main>
        </div>
    );
}