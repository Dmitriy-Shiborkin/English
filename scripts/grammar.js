'use strict';

function on_main() {

    btn_times.style.display = 'block';
    btn_concord_of_tenses.style.display = 'block';
    btn_prefixes_and_endings.style.display = 'block';
    btn_pronouns.style.display = 'block';
    btn_conditional_sentences.style.display = 'block';
    btn_grammatical_constructions.style.display = 'block';
    btn_modal_verbs.style.display = 'block';
    btn_scheme_of_permanent_matches.style.display = 'block';
    btn_gerund_and_infinitive.style.display = 'block';
    btn_negation.style.display = 'block';
    btn_prepositions.style.display = 'block';
    btn_time.style.display = 'block';

    document.getElementById("foto_1").src="";

}

function off_main() {

    btn_times.style.display = 'none';
    btn_concord_of_tenses.style.display = 'none';
    btn_prefixes_and_endings.style.display = 'none';
    btn_pronouns.style.display = 'none';
    btn_conditional_sentences.style.display = 'none';
    btn_grammatical_constructions.style.display = 'none';
    btn_modal_verbs.style.display = 'none';
    btn_scheme_of_permanent_matches.style.display = 'none';
    btn_gerund_and_infinitive.style.display = 'none';
    btn_negation.style.display = 'none';
    btn_prepositions.style.display = 'none';
    btn_time.style.display = 'none';

}

/*============================= times ======================================================================*/

btn_times.addEventListener('click', function() {

    off_main();

    btn_difference_between_active_and_passive_voice.style.display = 'block';
    btn_active_voice.style.display = 'block';
    btn_passive_voice.style.display = 'block';
    btn_comparison_of_times.style.display = 'block';
    btn_times_back.style.display = 'block';

});

btn_times_back.addEventListener('click', function() {

    on_main();

    btn_difference_between_active_and_passive_voice.style.display = 'none';
    btn_active_voice.style.display = 'none';
    btn_passive_voice.style.display = 'none';
    btn_comparison_of_times.style.display = 'none';
    btn_times_back.style.display = 'none';

});

/*============================= times ======================================================================*/

/*============================= АЗ vs ПЗ ===================================================================*/

btn_difference_between_active_and_passive_voice.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/difference_between_active_and_passive_voice.svg";

});

/*============================= АЗ vs ПЗ ===================================================================*/

/*============================= active voice ===============================================================*/

btn_active_voice.addEventListener('click', function() {

    btn_difference_between_active_and_passive_voice.style.display = 'none';
    btn_active_voice.style.display = 'none';
    btn_passive_voice.style.display = 'none';
    btn_comparison_of_times.style.display = 'none';
    btn_times_back.style.display = 'none';

    btn_active_times_table.style.display = 'block';
    btn_active_simple.style.display = 'block';
    btn_active_simple_be.style.display = 'block';
    btn_active_continuous.style.display = 'block';
    btn_active_perfect.style.display = 'block';
    btn_active_perfect_continuous.style.display = 'block';
    btn_active_back.style.display = 'block';

});

btn_active_times_table.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/active_voice/active_times_table.svg";

});

btn_active_simple.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/active_voice/active_simple.svg";

});

btn_active_simple_be.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/active_voice/active_simple_be.svg";

});

btn_active_continuous.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/active_voice/active_continuous.svg";

});

btn_active_perfect.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/active_voice/active_perfect.svg";

});

btn_active_perfect_continuous.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/active_voice/active_perfect_continuous.svg";

});

btn_active_back.addEventListener('click', function() {

    btn_difference_between_active_and_passive_voice.style.display = 'block';
    btn_active_voice.style.display = 'block';
    btn_passive_voice.style.display = 'block';
    btn_comparison_of_times.style.display = 'block';
    btn_times_back.style.display = 'block';

    btn_active_times_table.style.display = 'none';
    btn_active_simple.style.display = 'none';
    btn_active_simple_be.style.display = 'none';
    btn_active_continuous.style.display = 'none';
    btn_active_perfect.style.display = 'none';
    btn_active_perfect_continuous.style.display = 'none';
    btn_active_back.style.display = 'none';

    document.getElementById("foto_1").src="";

});

/*============================= active voice ===============================================================*/

/*============================= passive voice ==============================================================*/

btn_passive_voice.addEventListener('click', function() {

    btn_difference_between_active_and_passive_voice.style.display = 'none';
    btn_active_voice.style.display = 'none';
    btn_passive_voice.style.display = 'none';
    btn_comparison_of_times.style.display = 'none';
    btn_times_back.style.display = 'none';

    btn_passive_times_table.style.display = 'block';
    btn_passive_simple.style.display = 'block';
    btn_passive_continuous.style.display = 'block';
    btn_passive_perfect.style.display = 'block';
    btn_passive_back.style.display = 'block';

});

btn_passive_times_table.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/passive_voice/passive_times_table.svg";

});

btn_passive_simple.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/passive_voice/passive_simple.svg";

});

btn_passive_continuous.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/passive_voice/passive_continuous.svg";

});

btn_passive_perfect.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/passive_voice/passive_perfect.svg";

});

btn_passive_back.addEventListener('click', function() {

    btn_difference_between_active_and_passive_voice.style.display = 'block';
    btn_active_voice.style.display = 'block';
    btn_passive_voice.style.display = 'block';
    btn_comparison_of_times.style.display = 'block';
    btn_times_back.style.display = 'block';

    btn_passive_times_table.style.display = 'none';
    btn_passive_simple.style.display = 'none';
    btn_passive_continuous.style.display = 'none';
    btn_passive_perfect.style.display = 'none';
    btn_passive_back.style.display = 'none';

    document.getElementById("foto_1").src="";

});

/*============================= passive voice  =============================================================*/

/*============================= comparison of times  =======================================================*/

btn_comparison_of_times.addEventListener('click', function() {

    btn_difference_between_active_and_passive_voice.style.display = 'none';
    btn_active_voice.style.display = 'none';
    btn_passive_voice.style.display = 'none';
    btn_comparison_of_times.style.display = 'none';
    btn_times_back.style.display = 'none';

    btn_comparison_of_times_table.style.display = 'block';
    btn_simple_vs_continuous.style.display = 'block';
    btn_simple_vs_perfect.style.display = 'block';
    btn_continuous_vs_perfect_continuous.style.display = 'block';
    btn_perfect_vs_perfect_continuous.style.display = 'block';
    btn_present_continuous_vs_future_continuous.style.display = 'block';
    btn_comparison_of_times_back.style.display = 'block';

});

btn_comparison_of_times_table.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/comparison_of_times/comparison_of_times_table.svg";

});

btn_simple_vs_continuous.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/comparison_of_times/simple_vs_continuous.svg";

});

btn_simple_vs_perfect.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/comparison_of_times/simple_vs_perfect.svg";

});

btn_continuous_vs_perfect_continuous.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/comparison_of_times/continuous_vs_perfect_continuous.svg";

});

btn_perfect_vs_perfect_continuous.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/comparison_of_times/perfect_vs_perfect_continuous.svg";

});

btn_present_continuous_vs_future_continuous.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/times/comparison_of_times/present_continuous_vs_future_continuous.svg";

});

btn_comparison_of_times_back.addEventListener('click', function() {

    btn_difference_between_active_and_passive_voice.style.display = 'block';
    btn_active_voice.style.display = 'block';
    btn_passive_voice.style.display = 'block';
    btn_comparison_of_times.style.display = 'block';
    btn_times_back.style.display = 'block';

    btn_comparison_of_times_table.style.display = 'none';
    btn_simple_vs_continuous.style.display = 'none';
    btn_simple_vs_perfect.style.display = 'none';
    btn_continuous_vs_perfect_continuous.style.display = 'none';
    btn_perfect_vs_perfect_continuous.style.display = 'none';
    btn_present_continuous_vs_future_continuous.style.display = 'none';
    btn_comparison_of_times_back.style.display = 'none';

    document.getElementById("foto_1").src="";

});

/*============================= comparison of times ========================================================*/

/*============================= concord of tenses ==========================================================*/

btn_concord_of_tenses.addEventListener('click', function() {

    off_main();

    btn_concord_of_tenses_active.style.display = 'block';
    btn_concord_of_tenses_passive.style.display = 'block';
    btn_concord_of_tenses_back.style.display = 'block';

});

btn_concord_of_tenses_active.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/concord_of_tenses/active_concord_of_tenses.svg";

});

btn_concord_of_tenses_passive.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/concord_of_tenses/passive_concord_of_tenses.svg";

});

btn_concord_of_tenses_back.addEventListener('click', function() {

    on_main();

    btn_concord_of_tenses_active.style.display = 'none';
    btn_concord_of_tenses_passive.style.display = 'none';
    btn_concord_of_tenses_back.style.display = 'none';

});

/*============================= concord of tenses ==========================================================*/

/*============================= prefixes and endings =======================================================*/

btn_prefixes_and_endings.addEventListener('click', function() {

    off_main();

    btn_prefixes.style.display = 'block';
    btn_endings.style.display = 'block';
    btn_prefixes_and_endings_back.style.display = 'block';

});

btn_prefixes_and_endings_back.addEventListener('click', function() {

    on_main();

    btn_prefixes.style.display = 'none';
    btn_endings.style.display = 'none';
    btn_prefixes_and_endings_back.style.display = 'none';

});

/*============================= prefixes and endings =======================================================*/

/*============================= prefixes ===================================================================*/

btn_prefixes.addEventListener('click', function() {

    btn_prefixes_main.style.display = 'block';
    btn_un_in_im_il_ir_a_non_dis_mis.style.display = 'block';
    btn_re.style.display = 'block';
    btn_co.style.display = 'block';
    btn_ex.style.display = 'block';
    btn_de.style.display = 'block';
    btn_over_under_sub.style.display = 'block';
    btn_super_hyper_hypo.style.display = 'block';
    btn_ultra_infra.style.display = 'block';
    btn_pre_post.style.display = 'block';
    btn_inter_intra_trans.style.display = 'block';
    btn_pro_retro_anti.style.display = 'block';
    btn_extra_out.style.display = 'block';
    btn_hemi_semi_demi.style.display = 'block';
    btn_mono_multi.style.display = 'block';
    btn_mini_micro_macro.style.display = 'block';
    btn_en_em.style.display = 'block';
    btn_features_of_writing.style.display = 'block';
    btn_prefixes_back.style.display = 'block';

    btn_prefixes.style.display = 'none';
    btn_endings.style.display = 'none';
    btn_prefixes_and_endings_back.style.display = 'none';

});

btn_prefixes_main.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/prefixes_main.svg";

});

btn_un_in_im_il_ir_a_non_dis_mis.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/un_in_im_il_ir_a_non_dis_mis.svg";

});

btn_re.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/re.svg";

});

btn_co.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/co.svg";

});

btn_ex.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/ex.svg";

});

btn_de.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/de.svg";

});

btn_over_under_sub.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/over_under_sub.svg";

});

btn_super_hyper_hypo.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/super_hyper_hypo.svg";

});

btn_ultra_infra.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/ultra_infra.svg";

});

btn_pre_post.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/pre_post.svg";

});

btn_inter_intra_trans.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/inter_intra_trans.svg";

});

btn_pro_retro_anti.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/pro_retro_anti.svg";

});

btn_extra_out.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/extra_out.svg";

});

btn_hemi_semi_demi.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/hemi_semi_demi.svg";

});

btn_mono_multi.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/mono_multi.svg";

});

btn_mini_micro_macro.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/mini_micro_macro.svg";

});

btn_en_em.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/en_em.svg";

});

btn_features_of_writing.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/prefixes/features_of_writing.svg";

});

btn_prefixes_back.addEventListener('click', function() {

    btn_prefixes_main.style.display = 'none';
    btn_un_in_im_il_ir_a_non_dis_mis.style.display = 'none';
    btn_re.style.display = 'none';
    btn_co.style.display = 'none';
    btn_ex.style.display = 'none';
    btn_de.style.display = 'none';
    btn_over_under_sub.style.display = 'none';
    btn_super_hyper_hypo.style.display = 'none';
    btn_ultra_infra.style.display = 'none';
    btn_pre_post.style.display = 'none';
    btn_inter_intra_trans.style.display = 'none';
    btn_pro_retro_anti.style.display = 'none';
    btn_extra_out.style.display = 'none';
    btn_hemi_semi_demi.style.display = 'none';
    btn_mono_multi.style.display = 'none';
    btn_mini_micro_macro.style.display = 'none';
    btn_en_em.style.display = 'none';
    btn_features_of_writing.style.display = 'none';
    btn_prefixes_back.style.display = 'none';

    btn_prefixes.style.display = 'block';
    btn_endings.style.display = 'block';
    btn_prefixes_and_endings_back.style.display = 'block';

});

/*============================= prefixes ===================================================================*/

/*============================= endings ====================================================================*/

btn_endings.addEventListener('click', function() {

    btn_s_noun.style.display = 'block';
    btn_s_verb.style.display = 'block';
    btn_s_owner.style.display = 'block';
    btn_d.style.display = 'block';
    btn_ing.style.display = 'block';
    btn_ly.style.display = 'block';
    btn_y.style.display = 'block';
    btn_th.style.display = 'block';
    btn_est.style.display = 'block';
    btn_ion_tion_sion.style.display = 'block';
    btn_able_ible.style.display = 'block';
    btn_ive.style.display = 'block';
    btn_ty_ity.style.display = 'block';
    btn_ness.style.display = 'block';
    btn_ist.style.display = 'block';
    btn_hood.style.display = 'block';
    btn_less.style.display = 'block';
    btn_al.style.display = 'block';
    btn_ment.style.display = 'block';
    btn_ance_ence.style.display = 'block';
    btn_age.style.display = 'block';
    btn_ic_ical.style.display = 'block';
    btn_ous.style.display = 'block';
    btn_ful.style.display = 'block';
    btn_ry.style.display = 'block';
    btn_ary.style.display = 'block';
    btn_ship.style.display = 'block';
    btn_dom.style.display = 'block';
    btn_ism.style.display = 'block';
    btn_or.style.display = 'block';
    btn_e.style.display = 'block';
    btn_er.style.display = 'block';
    btn_endings_back.style.display = 'block';

    btn_prefixes.style.display = 'none';
    btn_endings.style.display = 'none';
    btn_prefixes_and_endings_back.style.display = 'none';

});

btn_s_noun.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/s_noun.svg";

});

btn_s_verb.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/s_verb.svg";

});

btn_s_owner.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/s_owner.svg";

});

btn_d.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/d.svg";

});

btn_ing.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ing.svg";

});

btn_ly.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ly.svg";

});

btn_y.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/y.svg";

});

btn_th.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/th.svg";

});

btn_est.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/est.svg";

});

btn_ion_tion_sion.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ion_tion_sion.svg";

});

btn_able_ible.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/able_ible.svg";

});

btn_ive.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ive.svg";

});

btn_ty_ity.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ty_ity.svg";

});

btn_ness.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ness.svg";

});

btn_ist.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ist.svg";

});

btn_hood.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/hood.svg";

});

btn_less.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/less.svg";

});

btn_al.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/al.svg";

});

btn_ment.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ment.svg";

});

btn_ance_ence.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ance_ence.svg";

});

btn_age.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/age.svg";

});

btn_ic_ical.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ic_ical.svg";

});

btn_ous.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ous.svg";

});

btn_ful.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ful.svg";

});

btn_ry.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ry.svg";

});

btn_ary.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ary.svg";

});

btn_ship.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ship.svg";

});

btn_dom.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/dom.svg";

});

btn_ism.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/ism.svg";

});

btn_or.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/or.svg";

});

btn_e.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/e.svg";

});

btn_er.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prefixes_and_endings/endings/er.svg";

});

btn_endings_back.addEventListener('click', function() {

    btn_s_noun.style.display = 'none';
    btn_s_verb.style.display = 'none';
    btn_s_owner.style.display = 'none';
    btn_d.style.display = 'none';
    btn_ing.style.display = 'none';
    btn_ly.style.display = 'none';
    btn_y.style.display = 'none';
    btn_th.style.display = 'none';
    btn_est.style.display = 'none';
    btn_ion_tion_sion.style.display = 'none';
    btn_able_ible.style.display = 'none';
    btn_ive.style.display = 'none';
    btn_ty_ity.style.display = 'none';
    btn_ness.style.display = 'none';
    btn_ist.style.display = 'none';
    btn_hood.style.display = 'none';
    btn_less.style.display = 'none';
    btn_al.style.display = 'none';
    btn_ment.style.display = 'none';
    btn_ance_ence.style.display = 'none';
    btn_age.style.display = 'none';
    btn_ic_ical.style.display = 'none';
    btn_ous.style.display = 'none';
    btn_ful.style.display = 'none';
    btn_ry.style.display = 'none';
    btn_ary.style.display = 'none';
    btn_ship.style.display = 'none';
    btn_dom.style.display = 'none';
    btn_ism.style.display = 'none';
    btn_or.style.display = 'none';
    btn_e.style.display = 'none';
    btn_er.style.display = 'none';
    btn_endings_back.style.display = 'none';

    btn_prefixes.style.display = 'block';
    btn_endings.style.display = 'block';
    btn_prefixes_and_endings_back.style.display = 'block';

    document.getElementById("foto_1").src="";

});

/*============================= endings ====================================================================*/

/*============================= pronouns ===================================================================*/

btn_pronouns.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/pronouns.svg";

});

/*============================= pronouns ===================================================================*/

/*============================= conditional entences =======================================================*/


btn_conditional_sentences.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/conditional_sentences.svg";

});

/*============================= conditional entences =======================================================*/

/*============================= grammatical constructions ==================================================*/

btn_grammatical_constructions.addEventListener('click', function() {

    off_main();

    btn_have_got_hase_got.style.display = 'block';
    btn_there_is_there_are.style.display = 'block';
    btn_had_better_would_rather.style.display = 'block';
    btn_grammatical_constructions_back.style.display = 'block';

});

btn_have_got_hase_got.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/grammatical_constructions/have_got_hase_got.svg";

});

btn_there_is_there_are.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/grammatical_constructions/there_is_there_are.svg";

});

btn_had_better_would_rather.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/grammatical_constructions/had_better_would_rather.svg";

});

btn_grammatical_constructions_back.addEventListener('click', function() {

    on_main();

    btn_have_got_hase_got.style.display = 'none';
    btn_there_is_there_are.style.display = 'none';
    btn_had_better_would_rather.style.display = 'none';
    btn_grammatical_constructions_back.style.display = 'none';

});

/*============================= grammatical constructions ==================================================*/

/*============================= modal verbs ================================================================*/

btn_modal_verbs.addEventListener('click', function() {

    off_main();

    btn_general_table.style.display = 'block';
    btn_can_able_to.style.display = 'block';
    btn_may_allowed_to.style.display = 'block';
    btn_must_have_to.style.display = 'block';
    btn_have_got_to.style.display = 'block';
    btn_am_to.style.display = 'block';
    btn_modal_verbs_back.style.display = 'block';

});

btn_general_table.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/modal_verbs/general_table.svg";

});

btn_can_able_to.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/modal_verbs/can_able_to.svg";

});

btn_may_allowed_to.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/modal_verbs/may_allowed_to.svg";

});

btn_must_have_to.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/modal_verbs/must_have_to.svg";

});

btn_have_got_to.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/modal_verbs/have_got_to.svg";

});

btn_am_to.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/modal_verbs/am_to.svg";

});

btn_modal_verbs_back.addEventListener('click', function() {

    on_main();

    btn_general_table.style.display = 'none';
    btn_can_able_to.style.display = 'none';
    btn_may_allowed_to.style.display = 'none';
    btn_must_have_to.style.display = 'none';
    btn_have_got_to.style.display = 'none';
    btn_am_to.style.display = 'none';
    btn_modal_verbs_back.style.display = 'none';

});

/*============================= modal verbs ================================================================*/

/*============================= scheme of permanent matches ================================================*/

btn_scheme_of_permanent_matches.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/scheme_of_permanent_matches.svg";

});

/*============================= scheme of permanent matches ================================================*/

/*============================= gerund and infinitive ======================================================*/

btn_gerund_and_infinitive.addEventListener('click', function() {

    off_main();

    btn_only_gerund.style.display = 'block';
    btn_gerund_and_infinitive_with_to.style.display = 'block';
    btn_infinitive_with_to.style.display = 'block';
    btn_infinitive_without_to.style.display = 'block';
    btn_gerund_and_infinitive_back.style.display = 'block';

});

btn_only_gerund.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/gerund_and_infinitive/gerund_only.svg";

});

btn_gerund_and_infinitive_with_to.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/gerund_and_infinitive/gerund_and_infinitive_with_to.svg";

});

btn_infinitive_with_to.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/gerund_and_infinitive/infinitive_with_to.svg";

});

btn_infinitive_without_to.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/gerund_and_infinitive/infinitive_without_to.svg";

});

btn_gerund_and_infinitive_back.addEventListener('click', function() {

    on_main();

    btn_only_gerund.style.display = 'none';
    btn_gerund_and_infinitive_with_to.style.display = 'none';
    btn_infinitive_with_to.style.display = 'none';
    btn_infinitive_without_to.style.display = 'none';
    btn_gerund_and_infinitive_back.style.display = 'none';

});

/*============================= gerund and infinitive ======================================================*/

/*============================= negation ===================================================================*/

btn_negation.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/negation.svg";

});

/*============================= negation ===================================================================*/

/*============================= prepositions ===============================================================*/

btn_prepositions.addEventListener('click', function() {

    off_main();

    btn_prepositions_in_on_at.style.display = 'block';
    btn_transport.style.display = 'block';
    btn_prepositions_back.style.display = 'block';

});

btn_prepositions_in_on_at.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prepositions/prepositions_in_on_at.svg";

});

btn_transport.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/prepositions/transport.svg";

});

btn_prepositions_back.addEventListener('click', function() {

    on_main();

    btn_prepositions_in_on_at.style.display = 'none';
    btn_transport.style.display = 'none';
    btn_prepositions_back.style.display = 'none';

});

/*============================= prepositions ================================================================*/

/*============================= time ========================================================================*/

btn_time.addEventListener('click', function() {

    off_main();

    btn_general_rules.style.display = 'block';
    btn_24_and_12_format.style.display = 'block';
    btn_time_back.style.display = 'block';

});

btn_general_rules.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/time/general_rules.svg";
    
});

btn_24_and_12_format.addEventListener('click', function() {

    document.getElementById("foto_1").src="foto/time/24_and_12_format.svg";

});

btn_time_back.addEventListener('click', function() {

    on_main();

    btn_general_rules.style.display = 'none';
    btn_24_and_12_format.style.display = 'none';
    btn_time_back.style.display = 'none';

});

/*============================= time ========================================================================*/





































