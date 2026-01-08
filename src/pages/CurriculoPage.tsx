import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, GraduationCap, Globe, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const CurriculoPage = () => {
  const experienciaProfissional = [
    {
      titulo: "Psicólogo Social",
      instituicao: "Núcleo de Convivência de Idosos São Francisco de Assis",
      periodo: "Desde 09/24"
    },
    {
      titulo: "Psicólogo Social",
      instituicao: "Centro de Acolhida Casa de Assis (SEFRAS)",
      periodo: "05 - 08/24"
    },
    {
      titulo: "Psicólogo Clínico",
      instituicao: "Psicoterapia",
      periodo: "Desde 02/22"
    },
    {
      titulo: "Psicólogo Voluntário",
      instituicao: "Coordenação-Geral do CONARE",
      periodo: "03 - 05/24"
    },
    {
      titulo: "Estágio Supervisionado em Psicoterapia",
      instituicao: "Clínica Escola de Psicologia da UFPB",
      periodo: "03/21 - 12/21"
    }
  ];

  const experienciaAcademica = [
    {
      titulo: "Corpo + Arte = +Saúde",
      tipo: "Curso de Férias",
      instituicao: "Faculdade de Saúde Pública da USP",
      periodo: "02/25"
    },
    {
      titulo: "Liga Acadêmica de Psicologia Fenomenológica Existencial (LAPFE)",
      tipo: "Ligante Acadêmico",
      instituicao: "PUC-SP",
      periodo: "04/23 - 07/23"
    },
    {
      titulo: "Para Além da Psicologia Clínica Clássica",
      tipo: "Projeto de Extensão",
      instituicao: "UFPB",
      periodo: "04/19 - 12/21"
    },
    {
      titulo: "UFPB no combate à COVID-19 — Apoio Matricial dos CAPS",
      tipo: "Projeto de Extensão",
      instituicao: "UFPB",
      periodo: "04/21 - 12/21"
    },
    {
      titulo: "Percepções de Jovens Homossexuais Nordestinos Acerca de Sua Inserção no Espaço Público na Cidade de São Paulo",
      tipo: "Projeto de Iniciação Científica",
      instituicao: "UFPB",
      periodo: "04/20 - 04/21"
    },
    {
      titulo: "Disciplina Abordagem Centrada na Pessoa",
      tipo: "Projeto de Monitoria",
      instituicao: "UFPB",
      periodo: "08/19 - 08/20"
    },
    {
      titulo: "ACTUAR Empresa Júnior de Psicologia",
      tipo: "Projeto de Extensão",
      instituicao: "UFPB",
      periodo: "06/17 - 04/18"
    }
  ];

  const formacao = [
    {
      titulo: "Psicólogo",
      instituicao: "Universidade Federal da Paraíba (UFPB)",
      periodo: "2016 - 2021"
    },
    {
      titulo: "Técnico em Gastronomia",
      instituicao: "Faculdade Maurício de Nassau (UNINASSAU)",
      periodo: "2011 - 2013"
    }
  ];

  const idiomas = [
    { idioma: "Português", nivel: "Nativo" },
    { idioma: "Inglês", nivel: "Avançado" },
    { idioma: "Francês", nivel: "Intermediário" }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </Link>
          <img src={logo} alt="Logo Felipe Melo" className="w-12 h-auto" />
        </div>
      </header>

      {/* Content */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-4">
              Currículo
            </h1>
            <p className="text-lg text-muted-foreground">
              Felipe Araujo de Melo — CRP 06/193310
            </p>
          </motion.div>

          {/* Formação Acadêmica */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-serif font-medium text-foreground">
                Formação Acadêmica
              </h2>
            </div>
            <div className="space-y-4">
              {formacao.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card p-5 rounded-xl border border-border"
                >
                  <h3 className="text-lg font-medium text-foreground mb-1">
                    {item.titulo}
                  </h3>
                  <p className="text-muted-foreground">{item.instituicao}</p>
                  <p className="text-sm text-primary mt-2">{item.periodo}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Experiência Profissional */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-serif font-medium text-foreground">
                Experiência Profissional
              </h2>
            </div>
            <div className="space-y-4">
              {experienciaProfissional.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card p-5 rounded-xl border border-border"
                >
                  <h3 className="text-lg font-medium text-foreground mb-1">
                    {item.titulo}
                  </h3>
                  <p className="text-muted-foreground">{item.instituicao}</p>
                  <p className="text-sm text-primary mt-2">{item.periodo}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Experiência Acadêmica */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-serif font-medium text-foreground">
                Projetos e Programas Acadêmicos
              </h2>
            </div>
            <div className="space-y-4">
              {experienciaAcademica.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card p-5 rounded-xl border border-border"
                >
                  <span className="inline-block text-xs font-medium text-primary-foreground bg-primary px-3 py-1 rounded-full mb-3">
                    {item.tipo}
                  </span>
                  <h3 className="text-lg font-medium text-foreground mb-1">
                    {item.titulo}
                  </h3>
                  <p className="text-muted-foreground">{item.instituicao}</p>
                  <p className="text-sm text-primary mt-2">{item.periodo}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Idiomas */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-serif font-medium text-foreground">
                Idiomas
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {idiomas.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card p-5 rounded-xl border border-border text-center"
                >
                  <h3 className="text-lg font-medium text-foreground mb-1">
                    {item.idioma}
                  </h3>
                  <p className="text-sm text-primary">{item.nivel}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export default CurriculoPage;
